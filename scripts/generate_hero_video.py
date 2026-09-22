import cv2
import numpy as np
import imageio
import os
import math

def create_hero_video():
    img_path = r"e:\CLIENT PROJECTS\VISTAS SPACECRAFT\vistas-spacecraft-website\public\hero-craftsman.jpg"
    out_path = r"e:\CLIENT PROJECTS\VISTAS SPACECRAFT\vistas-spacecraft-website\public\hero-video.mp4"
    
    img = cv2.imread(img_path)
    if img is None:
        print("Error: Could not load image from", img_path)
        return
    
    # Convert BGR (OpenCV) to RGB (standard video)
    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    orig_h, orig_w = img_rgb.shape[:2]
    
    # 1080p full HD
    target_w, target_h = 1920, 1080
    fps = 30
    duration_sec = 10
    total_frames = fps * duration_sec
    
    print(f"Generating 10-second cinematic H.264 video ({total_frames} frames @ {fps}fps) to {out_path}...")
    
    # Focus point for zoom (the craftsman's hands and the curved tabletop)
    focus_x = orig_w * 0.60
    focus_y = orig_h * 0.52
    
    # Floating particles in sunbeams
    num_particles = 80
    np.random.seed(42)
    px = np.random.uniform(target_w * 0.15, target_w * 0.75, num_particles)
    py = np.random.uniform(target_h * 0.1, target_h * 0.85, num_particles)
    pr = np.random.uniform(1.2, 3.5, num_particles)
    pvx = np.random.uniform(-0.35, 0.45, num_particles)
    pvy = np.random.uniform(-0.6, 0.15, num_particles)
    palpha = np.random.uniform(0.3, 0.7, num_particles)
    
    # Open H.264 MP4 writer with yuv420p for universal browser support
    writer = imageio.get_writer(
        out_path,
        fps=fps,
        codec='libx264',
        pixelformat='yuv420p',
        quality=8, # High visual quality
        ffmpeg_params=['-preset', 'medium', '-crf', '22', '-movflags', '+faststart']
    )
    
    for i in range(total_frames):
        t = i / total_frames
        # Smooth Ken Burns camera zoom in and back out seamlessly
        scale = 1.0 + 0.07 * math.sin(t * math.pi)
        
        crop_w = orig_w / scale
        crop_h = orig_h / scale
        
        x1 = int(max(0, focus_x - crop_w / 2))
        y1 = int(max(0, focus_y - crop_h / 2))
        x2 = int(min(orig_w, x1 + crop_w))
        y2 = int(min(orig_h, y1 + crop_h))
        
        crop = img_rgb[y1:y2, x1:x2]
        frame = cv2.resize(crop, (target_w, target_h), interpolation=cv2.INTER_LINEAR)
        
        # Subtle light beam warmth shimmer
        shimmer = 1.0 + 0.02 * math.sin(t * 4 * math.pi)
        
        # Particle layer
        overlay = frame.copy()
        for p in range(num_particles):
            curr_x = (px[p] + pvx[p] * i * 1.5) % target_w
            curr_y = (py[p] + pvy[p] * i * 1.0) % target_h
            
            flicker = 0.7 + 0.3 * math.sin(i * 0.12 + p)
            radius = int(pr[p])
            
            # Warm glowing sunbeam particles
            cv2.circle(overlay, (int(curr_x), int(curr_y)), radius, (255, 235, 190), -1, lineType=cv2.LINE_AA)
            cv2.circle(overlay, (int(curr_x), int(curr_y)), max(1, radius + 2), (255, 200, 120), 1, lineType=cv2.LINE_AA)
            
        cv2.addWeighted(overlay, 0.4, frame, 0.6, 0, frame)
        
        writer.append_data(frame)
        
        if i % 60 == 0:
            print(f"Processed frame {i}/{total_frames} ({int(i/total_frames*100)}%)...")
            
    writer.close()
    print("Video generation successfully completed!")
    size_mb = os.path.getsize(out_path) / (1024 * 1024)
    print(f"Output: {out_path} ({size_mb:.2f} MB)")

if __name__ == "__main__":
    create_hero_video()
