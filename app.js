/**
 * Ayodhya Deepotsav — Shubh Deepawali Royal Living Poster Core Script
 * Features:
 * - Top Left: Happy Diwali Giant Skyshot Launch -> Center Blast -> Circular Video Reveal -> Shard Shatter Out
 * - Top Right: Jay Diwali Super Interactive Button -> Royal Jharokha Video (Song & Garba) -> Superb Out Fireworks
 * - Dual-Canvas Atmospheric Engine (Stars, Ghat Micro-Diyas, Sarayu Wave Caustics, 60 FPS Particle FX)
 * - Progressive Twilight-to-Radiance 5-Stage Diya Ceremony & Grand Ayodhya Awakening
 * - Hardware Microphone Blow / Clap Detection
 * - Tuned Harmonic Brass Bells & Realistic Acoustic Web Audio Synthesis
 * - Evaluator / Judge Commemorative Honor Edict Modal & Dual-Engine High-Res PNG Minting
 */

document.addEventListener('DOMContentLoaded', () => {
  const fxCanvas = document.getElementById('fx-canvas');
  const skyCanvas = document.getElementById('sky-canvas');
  const posterStage = document.getElementById('poster-stage');
  
  // Top Buttons & Modals
  const btnHappyDiwali = document.getElementById('btn-happy-diwali');
  const btnJayDiwali = document.getElementById('btn-jay-diwali');
  
  const skyshotBlastModal = document.getElementById('skyshot-blast-modal');
  const videoHappyDiwali = document.getElementById('video-happy-diwali');
  const closeSkyshotBtn = document.getElementById('close-skyshot-btn');

  const jayDiwaliModal = document.getElementById('jay-diwali-modal');
  const videoJayDiwali = document.getElementById('video-jay-diwali');
  const closeJayDiwaliBtn = document.getElementById('close-jay-diwali-btn');

  // Judge Personalize Modal
  const personalizeBtn = document.getElementById('personalize-btn');
  const personalizeModal = document.getElementById('personalize-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const applyNameBtn = document.getElementById('apply-name-btn');
  const exportPngBtn = document.getElementById('export-png-btn');
  const judgeNameInput = document.getElementById('judge-name-input');
  const judgeDeptInput = document.getElementById('judge-dept-input');

  let stageWidth = 0;
  let stageHeight = 0;
  let skyCtx = null;
  let fxCtx = null;

  // =========================================================================
  // 1. PROCEDURAL WEB AUDIO SYNTHESIZER (NATIVE, REALISTIC & OFFLINE)
  // =========================================================================
  let audioCtx = null;
  let isSoundEnabled = true;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Realistic Rocket Propellant Combustion Hiss & Soaring Ascent Whistle
  function playRealisticRocketLaunch() {
    if (!isSoundEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const dur = 1.25;

    // A. Propellant Combustion Noise (Filtered Pink Noise)
    const bufLen = Math.floor(ctx.sampleRate * dur);
    const noiseBuf = ctx.createBuffer(1, bufLen, ctx.sampleRate);
    const out = noiseBuf.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufLen; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555;
      b1 = 0.99332 * b1 + white * 0.075;
      b2 = 0.96900 * b2 + white * 0.153;
      out[i] = (b0 + b1 + b2) * 0.28;
    }
    const noiseSrc = ctx.createBufferSource();
    noiseSrc.buffer = noiseBuf;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(550, now);
    filter.frequency.exponentialRampToValueAtTime(3400, now + dur);
    filter.Q.value = 4.2;

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.35, now);
    noiseGain.gain.linearRampToValueAtTime(0.65, now + dur * 0.7);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + dur);

    noiseSrc.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noiseSrc.start(now);

    // B. Aerodynamic Aero-Screamer Whistle
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(2600, now + dur * 0.85);
    osc.frequency.exponentialRampToValueAtTime(3800, now + dur);

    oscGain.gain.setValueAtTime(0.05, now);
    oscGain.gain.linearRampToValueAtTime(0.35, now + dur * 0.75);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + dur);
  }

  // Realistic Aerial Explosion (Sharp Detonation + 45Hz Sub-Bass + Atmospheric Crackle)
  function playRealisticAerialExplosion() {
    if (!isSoundEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // 1. Sharp Detonation Crack
    const crackOsc = ctx.createOscillator();
    const crackGain = ctx.createGain();
    crackOsc.type = 'triangle';
    crackOsc.frequency.setValueAtTime(220, now);
    crackOsc.frequency.exponentialRampToValueAtTime(35, now + 0.12);
    crackGain.gain.setValueAtTime(0.9, now);
    crackGain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);
    crackOsc.connect(crackGain);
    crackGain.connect(ctx.destination);
    crackOsc.start(now);
    crackOsc.stop(now + 0.15);

    // 2. Sub-Bass 45Hz Thunder Thump
    const boomOsc = ctx.createOscillator();
    const boomGain = ctx.createGain();
    boomOsc.type = 'sine';
    boomOsc.frequency.setValueAtTime(85, now);
    boomOsc.frequency.exponentialRampToValueAtTime(28, now + 0.8);
    boomGain.gain.setValueAtTime(0.95, now);
    boomGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
    boomOsc.connect(boomGain);
    boomGain.connect(ctx.destination);
    boomOsc.start(now);
    boomOsc.stop(now + 1.2);

    // 3. Atmospheric Reverb & Crackle Tail
    const tailDur = 1.8;
    const tailLen = Math.floor(ctx.sampleRate * tailDur);
    const tailBuf = ctx.createBuffer(1, tailLen, ctx.sampleRate);
    const tailData = tailBuf.getChannelData(0);
    for (let i = 0; i < tailLen; i++) {
      const decay = Math.pow(1 - i / tailLen, 2.5);
      const crackle = Math.random() > 0.92 ? (Math.random() * 2 - 1) * 1.8 : 0;
      tailData[i] = ((Math.random() * 2 - 1) * 0.4 + crackle) * decay;
    }
    const tailSrc = ctx.createBufferSource();
    tailSrc.buffer = tailBuf;
    const tailFilter = ctx.createBiquadFilter();
    tailFilter.type = 'lowpass';
    tailFilter.frequency.setValueAtTime(1800, now);
    tailFilter.frequency.exponentialRampToValueAtTime(180, now + tailDur);
    const tailGain = ctx.createGain();
    tailGain.gain.setValueAtTime(0.65, now);
    tailGain.gain.exponentialRampToValueAtTime(0.001, now + tailDur);
    tailSrc.connect(tailFilter);
    tailFilter.connect(tailGain);
    tailGain.connect(ctx.destination);
    tailSrc.start(now);
  }

  // Shard Shatter Detonation Sound (for out animation)
  function playShatterBlastSound() {
    if (!isSoundEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // High velocity shatter transient
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(60, now + 0.25);
    gain.gain.setValueAtTime(0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.3);

    playRealisticAerialExplosion();
  }

  // Tuned Brass Temple Bell Chime
  function playBellChime(freq = 392.0) {
    if (!isSoundEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const duration = 2.8;

    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, now);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2.756, now);

    const osc3 = ctx.createOscillator();
    const gain3 = ctx.createGain();
    osc3.type = 'triangle';
    osc3.frequency.setValueAtTime(freq * 0.5, now);

    gain1.gain.setValueAtTime(0.001, now);
    gain1.gain.exponentialRampToValueAtTime(0.4, now + 0.015);
    gain1.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    gain2.gain.setValueAtTime(0.001, now);
    gain2.gain.exponentialRampToValueAtTime(0.2, now + 0.02);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + (duration * 0.7));

    gain3.gain.setValueAtTime(0.001, now);
    gain3.gain.exponentialRampToValueAtTime(0.15, now + 0.03);
    gain3.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc1.connect(gain1);
    osc2.connect(gain2);
    osc3.connect(gain3);

    gain1.connect(ctx.destination);
    gain2.connect(ctx.destination);
    gain3.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc3.start(now);
    osc1.stop(now + duration);
    osc2.stop(now + duration);
    osc3.stop(now + duration);
  }

  function playIgnitionSound() {
    if (!isSoundEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(480, now + 0.18);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.35);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.25, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.42);
  }

  // Hook Temple Bells
  const templeBells = document.querySelectorAll('.temple-bell-wrapper');
  templeBells.forEach((bell) => {
    const pitch = parseFloat(bell.getAttribute('data-pitch')) || 392.0;
    bell.addEventListener('click', () => {
      bell.classList.remove('ringing');
      void bell.offsetWidth;
      bell.classList.add('ringing');
      playBellChime(pitch);
      
      const rect = bell.getBoundingClientRect();
      const stageRect = posterStage.getBoundingClientRect();
      spawnSparkler(rect.left - stageRect.left + rect.width / 2, rect.top - stageRect.top + rect.height, 14);
    });
  });

  // =========================================================================
  // 2. CANVAS ENGINE (STARS, SARAYU WATER, PARTICLES & SHATTER FRAGMENTS)
  // =========================================================================
  const stars = [];
  const ghatMicroDiyas = [];
  const distantLanterns = [];
  let waterWaveTime = 0;

  // Particle Collections
  const sparklerParticles = [];
  const floatingRiverDiyas = [];
  const activeLanterns = [];
  const rockets = [];
  const fireworkParticles = [];
  const riverRipples = [];
  const shatterFragments = []; // For the circular video shatter blast
  const goldCoins = []; // For Jaydiwali celebration out animation

  // Big Skyshot for Happy Diwali Trigger
  let bigSkyshot = null;

  function initAtmosphere() {
    stars.length = 0;
    ghatMicroDiyas.length = 0;
    distantLanterns.length = 0;

    for (let i = 0; i < 90; i++) {
      stars.push({
        x: Math.random() * stageWidth,
        y: Math.random() * (stageHeight * 0.55),
        radius: Math.random() * 1.5 + 0.4,
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        phase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.4 ? '#fff4d1' : (Math.random() > 0.5 ? '#ffd700' : '#d2f3fc')
      });
    }

    const ghatTopY = stageHeight * 0.72;
    for (let i = 0; i < 150; i++) {
      const stepTier = Math.floor(Math.random() * 4);
      const yPos = ghatTopY + (stepTier * (stageHeight * 0.065)) + (Math.random() * 8);
      ghatMicroDiyas.push({
        x: Math.random() * stageWidth,
        y: yPos,
        baseRadius: Math.random() * 1.8 + 1.2,
        flickerSpeed: Math.random() * 0.08 + 0.03,
        phase: Math.random() * Math.PI * 2,
        hue: Math.random() > 0.3 ? '#ff9900' : '#ffd700'
      });
    }

    for (let i = 0; i < 12; i++) {
      distantLanterns.push({
        x: Math.random() * stageWidth,
        y: Math.random() * stageHeight,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(Math.random() * 0.35 + 0.15),
        size: Math.random() * 5 + 3,
        alpha: Math.random() * 0.6 + 0.25,
        flicker: Math.random() * Math.PI
      });
    }
  }

  function renderSkyAndWater() {
    if (!skyCtx || stageWidth === 0) return;
    skyCtx.clearRect(0, 0, stageWidth, stageHeight);

    // Stars
    for (let star of stars) {
      star.phase += star.twinkleSpeed;
      const currentAlpha = star.alpha + Math.sin(star.phase) * 0.25;
      skyCtx.fillStyle = star.color;
      skyCtx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
      skyCtx.beginPath();
      skyCtx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      skyCtx.fill();
    }

    // Distant Lanterns
    for (let lantern of distantLanterns) {
      lantern.x += lantern.vx;
      lantern.y += lantern.vy;
      lantern.flicker += 0.05;

      if (lantern.y < -20) {
        lantern.y = stageHeight + 10;
        lantern.x = Math.random() * stageWidth;
      }
      if (lantern.x < -20) lantern.x = stageWidth + 20;
      if (lantern.x > stageWidth + 20) lantern.x = -20;

      const lanternGlow = Math.sin(lantern.flicker) * 0.15 + 0.85;
      skyCtx.save();
      skyCtx.globalAlpha = lantern.alpha * lanternGlow;
      skyCtx.shadowColor = '#ffaa00';
      skyCtx.shadowBlur = 10;
      skyCtx.fillStyle = '#ffb703';
      skyCtx.fillRect(lantern.x, lantern.y, lantern.size, lantern.size * 1.3);
      skyCtx.fillStyle = '#fffdf0';
      skyCtx.beginPath();
      skyCtx.arc(lantern.x + lantern.size / 2, lantern.y + lantern.size * 0.7, lantern.size * 0.25, 0, Math.PI * 2);
      skyCtx.fill();
      skyCtx.restore();
    }

    // Sarayu River Liquid Shimmer
    const riverY = stageHeight * 0.72;
    const riverHeight = stageHeight - riverY;
    waterWaveTime += 0.035;

    const riverGrad = skyCtx.createLinearGradient(0, riverY, 0, stageHeight);
    riverGrad.addColorStop(0, 'rgba(11, 27, 61, 0.6)');
    riverGrad.addColorStop(0.5, 'rgba(6, 16, 38, 0.85)');
    riverGrad.addColorStop(1, 'rgba(3, 8, 20, 0.98)');
    skyCtx.fillStyle = riverGrad;
    skyCtx.globalAlpha = 1.0;
    skyCtx.fillRect(0, riverY, stageWidth, riverHeight);

    skyCtx.lineWidth = 1.2;
    for (let row = 0; row < 18; row++) {
      const currentY = riverY + (row / 18) * riverHeight;
      const perspectiveScale = (row / 18);
      const waveAmplitude = 1.5 + perspectiveScale * 3.5;
      const speed = 0.8 + perspectiveScale * 0.4;
      
      skyCtx.beginPath();
      skyCtx.moveTo(0, currentY);
      for (let x = 0; x <= stageWidth; x += 25) {
        const wave = Math.sin((x * 0.02) + (waterWaveTime * speed) + row) * waveAmplitude;
        skyCtx.lineTo(x, currentY + wave);
      }
      const rowAlpha = (0.08 + Math.sin(waterWaveTime + row * 0.5) * 0.04) * (1 - perspectiveScale * 0.3);
      skyCtx.strokeStyle = `rgba(255, 200, 80, ${rowAlpha})`;
      skyCtx.stroke();
    }

    // Micro-Diyas on Ghat Steps
    skyCtx.globalAlpha = 1.0;
    for (let diya of ghatMicroDiyas) {
      diya.phase += diya.flickerSpeed;
      const flickerFactor = 0.75 + Math.sin(diya.phase) * 0.25;
      const radius = diya.baseRadius * flickerFactor;

      const glowGrad = skyCtx.createRadialGradient(diya.x, diya.y, 0, diya.x, diya.y, radius * 3.5);
      glowGrad.addColorStop(0, 'rgba(255, 170, 0, 0.8)');
      glowGrad.addColorStop(0.5, 'rgba(255, 100, 0, 0.2)');
      glowGrad.addColorStop(1, 'transparent');
      skyCtx.fillStyle = glowGrad;
      skyCtx.beginPath();
      skyCtx.arc(diya.x, diya.y, radius * 3.5, 0, Math.PI * 2);
      skyCtx.fill();

      skyCtx.fillStyle = diya.hue;
      skyCtx.beginPath();
      skyCtx.arc(diya.x, diya.y, radius, 0, Math.PI * 2);
      skyCtx.fill();

      if (diya.y > riverY - 10) {
        skyCtx.fillStyle = 'rgba(255, 170, 0, 0.15)';
        skyCtx.fillRect(diya.x - 3, diya.y + 4, 6, 8);
      }
    }

    requestAnimationFrame(renderSkyAndWater);
  }

  function resizeCanvases() {
    if (!fxCanvas || !skyCanvas || !posterStage) return;
    const rect = posterStage.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    stageWidth = rect.width;
    stageHeight = rect.height;

    fxCanvas.width = stageWidth * dpr;
    fxCanvas.height = stageHeight * dpr;
    skyCanvas.width = stageWidth * dpr;
    skyCanvas.height = stageHeight * dpr;

    fxCtx = fxCanvas.getContext('2d');
    skyCtx = skyCanvas.getContext('2d');
    fxCtx.scale(dpr, dpr);
    skyCtx.scale(dpr, dpr);

    initAtmosphere();
  }

  window.addEventListener('resize', resizeCanvases);
  resizeCanvases();
  requestAnimationFrame(renderSkyAndWater);

  // 3D Parallax Tilt
  posterStage.addEventListener('mousemove', (e) => {
    const rect = posterStage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -6;
    const tiltY = ((x - centerX) / centerX) * 6;
    posterStage.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    
    const pctX = (x / rect.width) * 100;
    const pctY = (y / rect.height) * 100;
    posterStage.style.setProperty('--light-x', `${pctX}%`);
    posterStage.style.setProperty('--light-y', `${pctY}%`);
  });

  posterStage.addEventListener('mouseleave', () => {
    posterStage.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
  });

  // Dock Tools
  let currentToolMode = 'sparkler';
  const dockButtons = document.querySelectorAll('.dock-btn[data-mode]');
  dockButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      dockButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentToolMode = btn.getAttribute('data-mode');

      // Instant interactive action & sound feedback on dock button click!
      const rect = posterStage.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height * 0.45;

      if (currentToolMode === 'firework') {
        launchFirework(centerX + (Math.random() - 0.5) * 320, centerY - 60);
      } else if (currentToolMode === 'lantern') {
        spawnSkyLantern(centerX + (Math.random() - 0.5) * 220, stageHeight - 80);
      } else if (currentToolMode === 'river-diya') {
        spawnRiverDiya(centerX + (Math.random() - 0.5) * 260, stageHeight * 0.76);
      } else if (currentToolMode === 'sparkler') {
        spawnSparkler(centerX, stageHeight * 0.65, 20);
      }
    });
  });

  function spawnSparkler(x, y, count = 6) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4.5 + 1.2;
      sparklerParticles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + 0.5,
        alpha: 1.0,
        decay: Math.random() * 0.035 + 0.02,
        size: Math.random() * 2.2 + 0.8,
        color: Math.random() > 0.3 ? '#ffd700' : (Math.random() > 0.5 ? '#ffffff' : '#ff9900')
      });
    }
  }

  function spawnRiverDiya(x, y) {
    const riverY = stageHeight * 0.72;
    const targetY = Math.max(riverY + 15, Math.min(stageHeight - 25, y));
    floatingRiverDiyas.push({
      x: x,
      y: targetY,
      vx: (Math.random() - 0.5) * 0.4 + 0.15,
      flicker: Math.random() * Math.PI,
      alpha: 1.0,
      life: 0
    });
    spawnRipple(x, targetY);
  }

  function spawnRipple(x, y) {
    riverRipples.push({
      x: x,
      y: y,
      radius: 4,
      maxRadius: Math.random() * 24 + 16,
      alpha: 0.8,
      speed: Math.random() * 0.5 + 0.4
    });
  }

  function spawnSkyLantern(x, y) {
    activeLanterns.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -(Math.random() * 0.9 + 0.7),
      swayPhase: Math.random() * Math.PI * 2,
      size: Math.random() * 12 + 16,
      alpha: 1.0,
      flicker: Math.random() * Math.PI
    });
  }

  const fireworkPalettes = [
    ['#ffd700', '#fff3a8', '#ff8800', '#ffffff'],
    ['#ff2a85', '#ff7700', '#ffd700', '#fff5cc'],
    ['#00f5d4', '#7000ff', '#ffd700', '#ffffff'],
    ['#ff3b30', '#ff9500', '#ffcc00', '#ffffff']
  ];

  function launchFirework(targetX, targetY) {
    playRealisticRocketLaunch();

    const startX = targetX + (Math.random() - 0.5) * 60;
    const startY = stageHeight - 10;
    const dy = targetY - startY;
    const dx = targetX - startX;
    const steps = 28;
    
    rockets.push({
      x: startX,
      y: startY,
      vx: dx / steps,
      vy: dy / steps,
      targetY: targetY,
      trail: [],
      palette: fireworkPalettes[Math.floor(Math.random() * fireworkPalettes.length)]
    });
  }

  function explodeFirework(x, y, palette, particleCount = 85) {
    playRealisticAerialExplosion();
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.2;
      const speed = Math.random() * 6.5 + 2.0;
      const color = palette[Math.floor(Math.random() * palette.length)];
      
      fireworkParticles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        gravity: 0.065,
        friction: 0.965,
        alpha: 1.0,
        decay: Math.random() * 0.016 + 0.012,
        size: Math.random() * 2.8 + 1.2,
        color: color,
        sparkle: Math.random() > 0.4
      });
    }

    for (let i = 0; i < 28; i++) {
      const angle = (i / 28) * Math.PI * 2;
      const speed = Math.random() * 2.5 + 1.0;
      fireworkParticles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        gravity: 0.04,
        friction: 0.95,
        alpha: 1.0,
        decay: 0.02,
        size: 1.8,
        color: '#ffd700',
        sparkle: true
      });
    }
  }

  // =========================================================================
  // 3. TOP LEFT TRIGGER: HAPPY DIWALI GIANT SKYSHOT -> CIRCULAR VIDEO -> SHATTER BLAST
  // =========================================================================
  let isSkyshotLaunching = false;

  if (btnHappyDiwali) {
    btnHappyDiwali.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isSkyshotLaunching) return;
      isSkyshotLaunching = true;
      btnHappyDiwali.style.transform = 'scale(0.95)';
      setTimeout(() => btnHappyDiwali.style.transform = '', 200);

      launchBigSkyshotToCenter();
    });
  }

  function launchBigSkyshotToCenter() {
    playRealisticRocketLaunch();

    const startX = stageWidth * 0.5;
    const startY = stageHeight + 15;
    const targetX = stageWidth * 0.5;
    const targetY = stageHeight * 0.44; // Center of poster

    const speed = 21; // Dynamic, crisp ascent

    bigSkyshot = {
      x: startX,
      y: startY,
      targetX: targetX,
      targetY: targetY,
      vy: -speed,
      trail: [],
      color: '#ffe082'
    };
  }

  function onBigSkyshotApex(x, y) {
    bigSkyshot = null;
    isSkyshotLaunching = false;

    // 1. Massive Explosion Blast
    explodeFirework(x, y, ['#ffd700', '#ffffff', '#ff9900', '#ff2a85'], 130);

    // 2. Reveal Circular Video Portal
    if (skyshotBlastModal && videoHappyDiwali) {
      skyshotBlastModal.classList.add('active');
      videoHappyDiwali.currentTime = 0;
      videoHappyDiwali.muted = false; // Loud, unmuted sound!
      videoHappyDiwali.volume = 1.0;

      const p = videoHappyDiwali.play();
      if (p !== undefined) {
        p.catch(() => {
          videoHappyDiwali.muted = false;
          videoHappyDiwali.play();
        });
      }

      // Auto trigger shatter when video ends!
      videoHappyDiwali.onended = () => {
        executeCircularVideoShatterOut();
      };
    }
  }

  // SHATTER OUT ANIMATION: Cuts entire circular video frame into small pieces that blast outward like a skyshot!
  function executeCircularVideoShatterOut() {
    if (!videoHappyDiwali || !skyshotBlastModal.classList.contains('active')) return;

    playShatterBlastSound();

    const rect = videoHappyDiwali.getBoundingClientRect();
    const stageRect = posterStage.getBoundingClientRect();
    const centerX = rect.left - stageRect.left + rect.width / 2;
    const centerY = rect.top - stageRect.top + rect.height / 2;
    const radius = rect.width / 2;

    // Detonate explosive firework burst at the video center
    explodeFirework(centerX, centerY, ['#ffd700', '#ffffff', '#ff3300', '#ff9900', '#ff007f'], 110);

    // 1. Freeze Video Frame onto Offscreen Canvas with proportional crop
    const off = document.createElement('canvas');
    const dim = Math.round(rect.width) || 320;
    off.width = dim;
    off.height = dim;
    const octx = off.getContext('2d');

    // Circular crop
    octx.save();
    octx.beginPath();
    octx.arc(dim / 2, dim / 2, dim / 2, 0, Math.PI * 2);
    octx.clip();

    const vw = videoHappyDiwali.videoWidth || 720;
    const vh = videoHappyDiwali.videoHeight || 1280;
    const cropSize = Math.min(vw, vh);
    const sx0 = (vw - cropSize) / 2;
    const sy0 = Math.max(0, Math.min(vh - cropSize, (vh - cropSize) * 0.32));

    try {
      octx.drawImage(videoHappyDiwali, sx0, sy0, cropSize, cropSize, 0, 0, dim, dim);
    } catch (err) {
      octx.fillStyle = '#ffd700';
      octx.fillRect(0, 0, dim, dim);
    }
    octx.restore();

    // 2. Cut into Grid of 100+ Pieces (11x11)
    const grid = 11;
    const tileW = dim / grid;
    const tileH = dim / grid;

    for (let r = 0; r < grid; r++) {
      for (let c = 0; c < grid; c++) {
        const sx = c * tileW;
        const sy = r * tileH;
        const dx = (sx + tileW / 2) - dim / 2;
        const dy = (sy + tileH / 2) - dim / 2;
        const dist = Math.hypot(dx, dy);

        // Keep pieces inside circle
        if (dist <= (dim / 2) + 6) {
          const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.35;
          const blastSpeed = (dist / (dim / 2)) * 14 + Math.random() * 9 + 5;

          shatterFragments.push({
            canvas: off,
            sx: sx,
            sy: sy,
            sw: tileW,
            sh: tileH,
            x: centerX + dx * (radius / (dim / 2)),
            y: centerY + dy * (radius / (dim / 2)),
            vx: Math.cos(angle) * blastSpeed,
            vy: Math.sin(angle) * blastSpeed - 3.2,
            vRot: (Math.random() - 0.5) * 0.35,
            rot: 0,
            gravity: 0.24,
            friction: 0.965,
            alpha: 1.0,
            decay: Math.random() * 0.016 + 0.012,
            scale: 1.0
          });
        }
      }
    }

    // 3. Immediately hide circular video modal so user sees the fragments scatter!
    videoHappyDiwali.pause();
    skyshotBlastModal.classList.remove('active');
  }

  if (closeSkyshotBtn) {
    closeSkyshotBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      executeCircularVideoShatterOut();
    });
  }

  // =========================================================================
  // 4. TOP RIGHT TRIGGER: JAY DIWALI SUPER-INTERACTIVE PORTAL (DAYA & JETHA SONG & GARBA)
  // =========================================================================
  if (btnJayDiwali) {
    btnJayDiwali.addEventListener('click', (e) => {
      e.stopPropagation();
      btnJayDiwali.style.transform = 'scale(0.95)';
      setTimeout(() => btnJayDiwali.style.transform = '', 200);

      openJayDiwaliCelebration();
    });
  }

  function openJayDiwaliCelebration() {
    playBellChime(440);

    if (jayDiwaliModal && videoJayDiwali) {
      jayDiwaliModal.classList.add('active');
      videoJayDiwali.currentTime = 0;
      videoJayDiwali.muted = false; // Loud unmuted song & dialogue!
      videoJayDiwali.volume = 1.0;

      const p = videoJayDiwali.play();
      if (p !== undefined) {
        p.catch(() => {
          videoJayDiwali.muted = false;
          videoJayDiwali.play();
        });
      }

      // Running animation triggers: Launch occasional sparkler fountains on canvas
      launchCelebrationRunningEffects();

      videoJayDiwali.onended = () => {
        closeJayDiwaliWithSuperbOutAnimation();
      };
    }
  }

  function launchCelebrationRunningEffects() {
    // If modal is active, spawn celebratory flares at sides
    if (!jayDiwaliModal.classList.contains('active')) return;
    spawnSparkler(stageWidth * 0.2, stageHeight * 0.8, 12);
    spawnSparkler(stageWidth * 0.8, stageHeight * 0.8, 12);
    setTimeout(() => {
      if (jayDiwaliModal.classList.contains('active')) {
        launchCelebrationRunningEffects();
      }
    }, 1800);
  }

  function closeJayDiwaliWithSuperbOutAnimation() {
    if (!videoJayDiwali || !jayDiwaliModal.classList.contains('active')) return;

    videoJayDiwali.pause();
    jayDiwaliModal.classList.remove('active');

    // SUPERB OUT ANIMATION WITH EFFECTS & FIREWORKS:
    // 1. Barrage of 6 fireworks across the sky!
    const barrageTargets = [
      { x: stageWidth * 0.15, y: stageHeight * 0.22 },
      { x: stageWidth * 0.32, y: stageHeight * 0.16 },
      { x: stageWidth * 0.50, y: stageHeight * 0.12 },
      { x: stageWidth * 0.68, y: stageHeight * 0.16 },
      { x: stageWidth * 0.85, y: stageHeight * 0.22 },
      { x: stageWidth * 0.50, y: stageHeight * 0.25 }
    ];

    barrageTargets.forEach((target, index) => {
      setTimeout(() => {
        launchFirework(target.x, target.y);
      }, index * 180);
    });

    // 2. Gold Coins & Flower Confetti Shower
    for (let i = 0; i < 50; i++) {
      goldCoins.push({
        x: Math.random() * stageWidth,
        y: -20 - Math.random() * 160,
        vy: Math.random() * 3.0 + 2.0,
        vx: (Math.random() - 0.5) * 1.8,
        size: Math.random() * 10 + 12,
        rot: Math.random() * 360,
        vRot: Math.random() * 6 + 3,
        alpha: 1.0
      });
    }

    // 3. Triumphant Ascending Bell Arpeggio
    const bellNotes = [261.63, 329.63, 392.00, 440.00, 523.25];
    bellNotes.forEach((pitch, i) => {
      setTimeout(() => playBellChime(pitch), i * 160);
    });
  }

  if (closeJayDiwaliBtn) {
    closeJayDiwaliBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeJayDiwaliWithSuperbOutAnimation();
    });
  }

  // =========================================================================
  // 5. FX CANVAS LOOP (60 FPS PARTICLE ENGINE & SHATTER COMPOSITOR)
  // =========================================================================
  function renderFX() {
    if (!fxCtx || stageWidth === 0) return;

    fxCtx.clearRect(0, 0, stageWidth, stageHeight);
    fxCtx.save();
    fxCtx.globalCompositeOperation = 'lighter';

    // A. Sparkler Particles
    for (let i = sparklerParticles.length - 1; i >= 0; i--) {
      const p = sparklerParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.08;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        sparklerParticles.splice(i, 1);
        continue;
      }

      fxCtx.fillStyle = p.color;
      fxCtx.globalAlpha = p.alpha;
      fxCtx.beginPath();
      fxCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      fxCtx.fill();
    }

    // B. Normal Rockets
    for (let i = rockets.length - 1; i >= 0; i--) {
      const r = rockets[i];
      r.x += r.vx;
      r.y += r.vy;

      r.trail.push({ x: r.x, y: r.y, alpha: 1.0 });
      if (r.trail.length > 8) r.trail.shift();

      for (let t of r.trail) {
        t.alpha -= 0.12;
        fxCtx.fillStyle = '#ffe082';
        fxCtx.globalAlpha = Math.max(0, t.alpha);
        fxCtx.beginPath();
        fxCtx.arc(t.x, t.y, 2, 0, Math.PI * 2);
        fxCtx.fill();
      }

      if (r.y <= r.targetY) {
        explodeFirework(r.x, r.y, r.palette);
        rockets.splice(i, 1);
      }
    }

    // C. The Giant Happy Diwali Skyshot
    if (bigSkyshot) {
      bigSkyshot.trail.push({ x: bigSkyshot.x, y: bigSkyshot.y, alpha: 1.0 });
      if (bigSkyshot.trail.length > 14) bigSkyshot.trail.shift();

      bigSkyshot.y += bigSkyshot.vy;

      // Heavy golden trail with sparks
      for (let t of bigSkyshot.trail) {
        t.alpha -= 0.07;
        fxCtx.fillStyle = '#ffd700';
        fxCtx.globalAlpha = Math.max(0, t.alpha);
        fxCtx.beginPath();
        fxCtx.arc(t.x + (Math.random() - 0.5) * 4, t.y, 4, 0, Math.PI * 2);
        fxCtx.fill();
      }

      // Rocket head flare
      fxCtx.fillStyle = '#ffffff';
      fxCtx.globalAlpha = 1.0;
      fxCtx.beginPath();
      fxCtx.arc(bigSkyshot.x, bigSkyshot.y, 6, 0, Math.PI * 2);
      fxCtx.fill();

      // Check Apex Blast Arrival!
      if (bigSkyshot.y <= bigSkyshot.targetY) {
        onBigSkyshotApex(bigSkyshot.x, bigSkyshot.y);
      }
    }

    // D. Firework Particles
    for (let i = fireworkParticles.length - 1; i >= 0; i--) {
      const p = fireworkParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= p.friction;
      p.vy *= p.friction;
      p.vy += p.gravity;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        fireworkParticles.splice(i, 1);
        continue;
      }

      const currentSize = p.sparkle && Math.random() > 0.4 ? p.size * 1.5 : p.size;
      fxCtx.fillStyle = p.color;
      fxCtx.globalAlpha = p.alpha;
      fxCtx.beginPath();
      fxCtx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
      fxCtx.fill();
    }

    // E. Shatter Shard Fragments (The Out Animation for Circular Video)
    fxCtx.globalCompositeOperation = 'source-over';
    for (let i = shatterFragments.length - 1; i >= 0; i--) {
      const s = shatterFragments[i];
      s.vx *= s.friction;
      s.vy *= s.friction;
      s.vy += s.gravity;
      s.x += s.vx;
      s.y += s.vy;
      s.rot += s.vRot;
      s.alpha -= s.decay;

      if (s.alpha <= 0) {
        shatterFragments.splice(i, 1);
        continue;
      }

      // Render shard tile
      fxCtx.save();
      fxCtx.translate(s.x, s.y);
      fxCtx.rotate(s.rot);
      fxCtx.globalAlpha = s.alpha;

      // Draw piece from offscreen frozen canvas
      fxCtx.drawImage(s.canvas, s.sx, s.sy, s.sw, s.sh, -s.sw / 2, -s.sh / 2, s.sw, s.sh);

      // Golden burning edge on fragment
      fxCtx.strokeStyle = '#ffd700';
      fxCtx.lineWidth = 1;
      fxCtx.strokeRect(-s.sw / 2, -s.sh / 2, s.sw, s.sh);

      fxCtx.restore();

      // Embers trailing behind shard
      if (Math.random() > 0.4) {
        sparklerParticles.push({
          x: s.x,
          y: s.y,
          vx: (Math.random() - 0.5) * 1.5,
          vy: Math.random() * 1.2,
          alpha: s.alpha * 0.8,
          decay: 0.05,
          size: 1.5,
          color: '#ffd700'
        });
      }
    }

    // F. Gold Coins Falling (Jaydiwali Out Animation)
    for (let i = goldCoins.length - 1; i >= 0; i--) {
      const c = goldCoins[i];
      c.y += c.vy;
      c.x += c.vx;
      c.rot += c.vRot;

      if (c.y > stageHeight + 30) {
        goldCoins.splice(i, 1);
        continue;
      }

      fxCtx.save();
      fxCtx.translate(c.x, c.y);
      const scaleY = Math.cos((c.rot * Math.PI) / 180);
      fxCtx.scale(1, Math.abs(scaleY) > 0.15 ? scaleY : 0.15);

      fxCtx.fillStyle = '#ffd700';
      fxCtx.beginPath();
      fxCtx.arc(0, 0, c.size, 0, Math.PI * 2);
      fxCtx.fill();

      fxCtx.strokeStyle = '#b8860b';
      fxCtx.lineWidth = 1.5;
      fxCtx.stroke();
      fxCtx.restore();
    }

    // G. Floating River Diyas & Ripples
    for (let i = riverRipples.length - 1; i >= 0; i--) {
      const rip = riverRipples[i];
      rip.radius += rip.speed;
      rip.alpha -= 0.015;

      if (rip.alpha <= 0 || rip.radius >= rip.maxRadius) {
        riverRipples.splice(i, 1);
        continue;
      }

      fxCtx.save();
      fxCtx.strokeStyle = `rgba(255, 215, 0, ${rip.alpha * 0.4})`;
      fxCtx.lineWidth = 1.2;
      fxCtx.beginPath();
      fxCtx.ellipse(rip.x, rip.y, rip.radius * 2, rip.radius * 0.6, 0, 0, Math.PI * 2);
      fxCtx.stroke();
      fxCtx.restore();
    }

    for (let i = floatingRiverDiyas.length - 1; i >= 0; i--) {
      const d = floatingRiverDiyas[i];
      d.x += d.vx;
      d.flicker += 0.08;
      d.life++;

      if (d.life % 45 === 0) {
        spawnRipple(d.x, d.y + 4);
      }

      if (d.x > stageWidth + 40 || d.x < -40) {
        floatingRiverDiyas.splice(i, 1);
        continue;
      }

      fxCtx.save();
      const flickerScale = 0.85 + Math.sin(d.flicker) * 0.2;

      const diyaGlow = fxCtx.createRadialGradient(d.x, d.y - 4, 0, d.x, d.y - 4, 28 * flickerScale);
      diyaGlow.addColorStop(0, 'rgba(255, 170, 0, 0.7)');
      diyaGlow.addColorStop(0.5, 'rgba(255, 90, 0, 0.25)');
      diyaGlow.addColorStop(1, 'transparent');
      fxCtx.fillStyle = diyaGlow;
      fxCtx.beginPath();
      fxCtx.arc(d.x, d.y - 4, 28 * flickerScale, 0, Math.PI * 2);
      fxCtx.fill();

      fxCtx.fillStyle = '#8b4513';
      fxCtx.beginPath();
      fxCtx.ellipse(d.x, d.y, 14, 5, 0, 0, Math.PI);
      fxCtx.fill();

      fxCtx.fillStyle = '#d4af37';
      fxCtx.beginPath();
      fxCtx.ellipse(d.x, d.y, 14, 3, 0, 0, Math.PI * 2);
      fxCtx.fill();

      fxCtx.fillStyle = '#fff7c2';
      fxCtx.beginPath();
      fxCtx.moveTo(d.x - 3, d.y - 1);
      fxCtx.quadraticCurveTo(d.x, d.y - 14 * flickerScale, d.x + 3, d.y - 1);
      fxCtx.fill();

      fxCtx.fillStyle = 'rgba(255, 170, 0, 0.25)';
      fxCtx.fillRect(d.x - 6, d.y + 4, 12, 10);
      fxCtx.restore();
    }

    // H. Sky Lanterns
    for (let i = activeLanterns.length - 1; i >= 0; i--) {
      const l = activeLanterns[i];
      l.swayPhase += 0.04;
      l.x += l.vx + Math.sin(l.swayPhase) * 0.45;
      l.y += l.vy;
      l.flicker += 0.07;
      l.size = Math.max(8, l.size * 0.999);

      if (l.y < -40) {
        activeLanterns.splice(i, 1);
        continue;
      }

      fxCtx.save();
      const glowFactor = 0.85 + Math.sin(l.flicker) * 0.15;
      const lanternGlow = fxCtx.createRadialGradient(l.x + l.size / 2, l.y + l.size / 2, 0, l.x + l.size / 2, l.y + l.size / 2, l.size * 2);
      lanternGlow.addColorStop(0, `rgba(255, 160, 20, ${0.65 * glowFactor})`);
      lanternGlow.addColorStop(0.6, `rgba(255, 90, 0, ${0.2 * glowFactor})`);
      lanternGlow.addColorStop(1, 'transparent');
      fxCtx.fillStyle = lanternGlow;
      fxCtx.beginPath();
      fxCtx.arc(l.x + l.size / 2, l.y + l.size / 2, l.size * 2, 0, Math.PI * 2);
      fxCtx.fill();

      fxCtx.fillStyle = '#ff9e00';
      fxCtx.beginPath();
      fxCtx.moveTo(l.x + l.size * 0.15, l.y);
      fxCtx.lineTo(l.x + l.size * 0.85, l.y);
      fxCtx.lineTo(l.x + l.size, l.y + l.size * 1.3);
      fxCtx.lineTo(l.x, l.y + l.size * 1.3);
      fxCtx.closePath();
      fxCtx.fill();

      fxCtx.strokeStyle = '#994d00';
      fxCtx.lineWidth = 1;
      fxCtx.stroke();

      fxCtx.fillStyle = '#fffdf0';
      fxCtx.beginPath();
      fxCtx.arc(l.x + l.size / 2, l.y + l.size * 0.9, l.size * 0.22 * glowFactor, 0, Math.PI * 2);
      fxCtx.fill();
      fxCtx.restore();
    }

    fxCtx.restore();
    requestAnimationFrame(renderFX);
  }
  requestAnimationFrame(renderFX);

  // General click to trigger active dock tool
  posterStage.addEventListener('click', (e) => {
    if (e.target.closest('#interactive-dock') || e.target.closest('#personalize-modal') || e.target.closest('#temple-bells-container') || e.target.closest('#diya-altar') || e.target.closest('.top-celebration-anchors') || e.target.closest('.portal-backdrop')) {
      return;
    }
    const rect = posterStage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x < 0 || x > rect.width || y < 0 || y > rect.height) return;

    if (currentToolMode === 'sparkler') {
      spawnSparkler(x, y, 22);
    } else if (currentToolMode === 'river-diya') {
      spawnRiverDiya(x, y);
    } else if (currentToolMode === 'lantern') {
      spawnSkyLantern(x, y);
    } else if (currentToolMode === 'firework') {
      launchFirework(x, Math.max(50, Math.min(y, stageHeight * 0.65)));
    }
  });

  posterStage.addEventListener('mousemove', (e) => {
    const rect = posterStage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (currentToolMode === 'sparkler') {
      spawnSparkler(x, y, 2);
    }
  });

  // =========================================================================
  // 6. PROGRESSIVE 5-STAGE DIYA LIGHTING & AYODHYA AWAKENING
  // =========================================================================
  const diyaNodes = document.querySelectorAll('.diya-node');
  const litDiyas = new Set();
  let isAyodhyaAwakened = false;
  let currentAmbientBrightness = 0.32;

  function updatePosterBrightness(newBrightness) {
    currentAmbientBrightness = Math.min(1.0, newBrightness);
    posterStage.style.setProperty('--ambient-brightness', currentAmbientBrightness.toFixed(2));
  }
  updatePosterBrightness(currentAmbientBrightness);

  function igniteDiya(diyaElement) {
    const diyaIndex = diyaElement.getAttribute('data-diya');
    if (litDiyas.has(diyaIndex)) return;

    litDiyas.add(diyaIndex);

    const flameParticle = diyaElement.querySelector('.flame-particle');
    const flameGlow = diyaElement.querySelector('.flame-glow');
    if (flameParticle) {
      flameParticle.classList.remove('unlit');
      flameParticle.classList.add('lit');
    }
    if (flameGlow) {
      flameGlow.classList.add('lit');
    }

    const rect = diyaElement.getBoundingClientRect();
    const stageRect = posterStage.getBoundingClientRect();
    const sparkX = rect.left - stageRect.left + rect.width / 2;
    const sparkY = rect.top - stageRect.top + 8;
    spawnSparkler(sparkX, sparkY, 24);
    playIgnitionSound();

    const newBrightness = 0.32 + (litDiyas.size * 0.14);
    updatePosterBrightness(newBrightness);

    if ((diyaIndex === '3' || litDiyas.size === 5) && !isAyodhyaAwakened) {
      triggerAyodhyaAwakening(sparkX, sparkY);
    }
  }

  diyaNodes.forEach((diya) => {
    diya.addEventListener('click', (e) => {
      e.stopPropagation();
      igniteDiya(diya);
    });
  });

  const hintBanner = document.getElementById('ignition-hint');
  if (hintBanner) {
    hintBanner.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerDiyaClapGlow();
    });
  }

  function triggerAyodhyaAwakening(originX = stageWidth / 2, originY = stageHeight * 0.8) {
    isAyodhyaAwakened = true;
    updatePosterBrightness(1.0);

    diyaNodes.forEach((d, idx) => {
      setTimeout(() => {
        igniteDiya(d);
      }, idx * 180);
    });

    const shockwave = document.createElement('div');
    shockwave.className = 'awakening-shockwave';
    shockwave.style.left = `${originX - 100}px`;
    shockwave.style.top = `${originY - 100}px`;
    shockwave.style.width = '200px';
    shockwave.style.height = '200px';
    posterStage.appendChild(shockwave);
    setTimeout(() => shockwave.remove(), 1700);

    const saluteTargets = [
      { x: stageWidth * 0.25, y: stageHeight * 0.2 },
      { x: stageWidth * 0.50, y: stageHeight * 0.15 },
      { x: stageWidth * 0.75, y: stageHeight * 0.2 },
      { x: stageWidth * 0.38, y: stageHeight * 0.28 },
      { x: stageWidth * 0.62, y: stageHeight * 0.28 },
    ];

    saluteTargets.forEach((target, index) => {
      setTimeout(() => {
        launchFirework(target.x, target.y);
      }, index * 260);
    });

    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        spawnSkyLantern(stageWidth * 0.2 + (Math.random() * stageWidth * 0.6), stageHeight * 0.75);
      }, i * 220);
    }

    templeBells.forEach((bell, index) => {
      setTimeout(() => {
        const pitch = parseFloat(bell.getAttribute('data-pitch')) || 392.0;
        bell.classList.remove('ringing');
        void bell.offsetWidth;
        bell.classList.add('ringing');
        playBellChime(pitch);
      }, index * 200 + 400);
    });

    const hintBanner = document.getElementById('ignition-hint');
    if (hintBanner) {
      hintBanner.style.background = 'linear-gradient(90deg, rgba(255, 170, 0, 0.3), rgba(220, 50, 80, 0.35))';
      hintBanner.style.borderColor = '#ffd700';
      hintBanner.style.boxShadow = '0 0 35px rgba(255, 215, 0, 0.6)';
      hintBanner.innerHTML = `
        <span class="hint-icon">🪔</span>
        <span class="hint-text" style="color: #ffffff; font-weight: 800;">
          ✨ AYODHYA DHAM IS AWAKENED! SHUBH DEEPAWALI ✨
        </span>
        <span class="hint-icon">🏹</span>
      `;
    }
  }

  // =========================================================================
  // 7. MICROPHONE BLOW / CLAP DETECTION (HARDWARE FEATURE)
  // =========================================================================
  const micBtn = document.getElementById('mic-toggle-btn');
  const micIcon = document.getElementById('mic-icon');
  let isMicListening = false;
  let micAudioStream = null;
  let micAnalyser = null;
  let micInterval = null;
  let lastMicTriggerTime = 0;

  function triggerDiyaClapGlow() {
    // 1. If central Mahadiya is unlit, prioritize igniting Mahadiya (awakens Ayodhya & cascades all diyas)
    const mahadiya = document.querySelector('.central-mahadiya');
    if (mahadiya && !litDiyas.has('3')) {
      igniteDiya(mahadiya);
      return;
    }

    // 2. If any other altar diya is unlit, ignite the next unlit diya
    const unlitDiya = Array.from(diyaNodes).find(d => !litDiyas.has(d.getAttribute('data-diya')));
    if (unlitDiya) {
      igniteDiya(unlitDiya);
      return;
    }

    // 3. If ALL diyas are already lit, trigger an intense "Glow Up" flare pulse and sparkler bursts on all 5 diyas
    diyaNodes.forEach((diya) => {
      const flameParticle = diya.querySelector('.flame-particle');
      const flameGlow = diya.querySelector('.flame-glow');
      if (flameParticle) {
        flameParticle.classList.remove('flare-pulse');
        void flameParticle.offsetWidth; // Force CSS reflow to replay pulse
        flameParticle.classList.add('flare-pulse');
        setTimeout(() => flameParticle.classList.remove('flare-pulse'), 800);
      }
      if (flameGlow) {
        flameGlow.classList.remove('flare-pulse');
        void flameGlow.offsetWidth;
        flameGlow.classList.add('flare-pulse');
        setTimeout(() => flameGlow.classList.remove('flare-pulse'), 800);
      }
      const rect = diya.getBoundingClientRect();
      const stageRect = posterStage.getBoundingClientRect();
      const sparkX = rect.left - stageRect.left + rect.width / 2;
      const sparkY = rect.top - stageRect.top + 8;
      spawnSparkler(sparkX, sparkY, 18);
    });
    playIgnitionSound();
    updatePosterBrightness(1.0);
  }

  async function toggleMicIgnition() {
    if (isMicListening) {
      if (micAudioStream) {
        micAudioStream.getTracks().forEach(track => track.stop());
      }
      if (micInterval) clearInterval(micInterval);
      isMicListening = false;
      micBtn.classList.remove('active');
      micBtn.style.borderColor = '';
      micBtn.style.boxShadow = '';
      micIcon.innerText = '🎙️';
      return;
    }

    try {
      const ctx = getAudioContext();
      if (ctx && ctx.state === 'suspended') {
        await ctx.resume();
      }

      // Request stream; disable aggressive echoCancellation/noiseSuppression so transient claps & slaps pass cleanly
      try {
        micAudioStream = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: false,
            noiseSuppression: false,
            autoGainControl: false
          },
          video: false
        });
      } catch (err) {
        micAudioStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      }

      const micSource = audioCtx.createMediaStreamSource(micAudioStream);
      micAnalyser = audioCtx.createAnalyser();
      micAnalyser.fftSize = 512;
      micAnalyser.smoothingTimeConstant = 0.15; // Fast transient response for claps/slaps
      micSource.connect(micAnalyser);

      isMicListening = true;
      micBtn.classList.add('active');
      micBtn.style.borderColor = '#ffd700';
      micIcon.innerText = '🟡'; // Initializing & warming up

      const timeData = new Uint8Array(micAnalyser.fftSize);
      const freqData = new Uint8Array(micAnalyser.frequencyBinCount);

      // Warmup window: ignore triggers for the first 800ms while hardware stream stabilizes
      // and physical mouse click or finger tap on the button settles
      const micInitTimestamp = performance.now();
      let isCalibrated = false;

      micInterval = setInterval(() => {
        if (!isMicListening) return;

        micAnalyser.getByteTimeDomainData(timeData);
        micAnalyser.getByteFrequencyData(freqData);

        const now = performance.now();

        // 1. Detect and discard uninitialized / blank buffers (all zeros from OS driver)
        let isBlank = true;
        for (let i = 0; i < 16; i++) {
          if (timeData[i] !== 0) { isBlank = false; break; }
        }
        if (isBlank) return;

        // 2. Hardware warmup grace period (800ms) - prevents button click sound from triggering
        if (now - micInitTimestamp < 800) {
          return;
        }

        if (!isCalibrated) {
          isCalibrated = true;
          micIcon.innerText = '🟢'; // Calibrated and actively listening
          lastMicTriggerTime = now;
        }

        // Instantaneous waveform peak deviation from baseline (128) and sample delta jump
        let peakDeviation = 0;
        let maxDelta = 0;
        for (let i = 0; i < timeData.length; i++) {
          const dev = Math.abs(timeData[i] - 128);
          if (dev > peakDeviation) peakDeviation = dev;
          if (i > 0) {
            const delta = Math.abs(timeData[i] - timeData[i - 1]);
            if (delta > maxDelta) maxDelta = delta;
          }
        }

        // Frequency domain peak
        let maxFreq = 0;
        for (let i = 0; i < freqData.length; i++) {
          if (freqData[i] > maxFreq) maxFreq = freqData[i];
        }

        // Slap/Clap detection criteria:
        // A real hand clap, desk slap, or blow produces an acoustic shockwave:
        // - peakDeviation >= 48 (normal speech is 15-30, clapping/slapping spikes to 55-120+)
        // - AND sharp sample-to-sample transient jump maxDelta >= 32
        // - OR peak frequency spike maxFreq >= 95
        // - OR direct blow on mic diaphragm peakDeviation >= 65
        const isClapOrSlap = (peakDeviation >= 48 && maxDelta >= 32) || (maxFreq >= 95) || (peakDeviation >= 65);

        if (isClapOrSlap && (now - lastMicTriggerTime > 500)) {
          lastMicTriggerTime = now;
          triggerDiyaClapGlow();

          micIcon.innerText = '✨';
          micBtn.style.boxShadow = '0 0 20px #ffd700, 0 0 35px #ff9900';
          setTimeout(() => {
            if (isMicListening) {
              micIcon.innerText = '🟢';
              micBtn.style.boxShadow = '';
            }
          }, 600);
        }
      }, 30);

    } catch (err) {
      console.warn('Microphone permission or hardware access issue:', err);
      alert('Microphone access was not granted or is unavailable. You can click directly on the Diyas to ignite them!');
    }
  }

  if (micBtn) {
    micBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMicIgnition();
    });
  }

  // Audio Toggle Button (Mute/Unmute)
  const audioToggleBtn = document.getElementById('audio-toggle-btn');
  const audioIcon = document.getElementById('audio-icon');
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      isSoundEnabled = !isSoundEnabled;
      if (isSoundEnabled) {
        getAudioContext();
        audioIcon.innerText = '🔊';
        audioToggleBtn.classList.add('active');
      } else {
        audioIcon.innerText = '🔇';
        audioToggleBtn.classList.remove('active');
      }
    });
  }

  // =========================================================================
  // 8. JUDGE HONOR EDICT MODAL & EXPORT
  // =========================================================================
  if (personalizeBtn && personalizeModal) {
    personalizeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      personalizeModal.classList.add('active');
    });
  }

  if (modalCloseBtn && personalizeModal) {
    modalCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      personalizeModal.classList.remove('active');
    });
  }

  if (applyNameBtn) {
    applyNameBtn.addEventListener('click', () => {
      const name = judgeNameInput.value.trim();
      const dept = judgeDeptInput.value.trim();
      if (name) {
        let dedicatedElem = document.getElementById('dedicated-judge-tag');
        if (!dedicatedElem) {
          dedicatedElem = document.createElement('div');
          dedicatedElem.id = 'dedicated-judge-tag';
          document.getElementById('center-monument').appendChild(dedicatedElem);
        }
        dedicatedElem.innerHTML = `🪔 Dedicated in Honor of: <strong style="color: #fff;">${name}</strong> ${dept ? `<span style="opacity: 0.8;">(${dept})</span>` : ''}`;
        personalizeModal.classList.remove('active');
        playBellChime(523.25);
      }
    });
  }

  if (exportPngBtn) {
    exportPngBtn.addEventListener('click', () => {
      exportPngBtn.innerText = 'Generating PNG...';
      const exportTarget = document.getElementById('poster-stage');

      if (window.html2canvas && exportTarget) {
        html2canvas(exportTarget, {
          backgroundColor: '#05020a',
          scale: 2,
          useCORS: true,
          logging: false
        }).then((canvas) => {
          triggerDownload(canvas.toDataURL('image/png'));
        }).catch(() => {
          fallbackCanvasExport();
        });
      } else {
        fallbackCanvasExport();
      }
    });
  }

  function fallbackCanvasExport() {
    const off = document.createElement('canvas');
    off.width = 1400;
    off.height = 940;
    const ctx = off.getContext('2d');

    const bg = ctx.createRadialGradient(700, 300, 100, 700, 470, 800);
    bg.addColorStop(0, '#2a0e44');
    bg.addColorStop(0.55, '#120522');
    bg.addColorStop(1, '#05020a');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 1400, 940);

    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 30, 1340, 880);

    ctx.fillStyle = '#e5c158';
    ctx.font = 'bold 22px serif';
    ctx.textAlign = 'center';
    ctx.fillText('॥ रामो विग्रहवान् धर्मः • तमसो मा ज्योतिर्गमय ॥', 700, 140);

    ctx.fillStyle = '#ffd700';
    ctx.font = '900 68px serif';
    ctx.fillText('SHUBH DEEPAWALI', 700, 240);

    ctx.fillStyle = '#ffe082';
    ctx.font = 'bold 36px serif';
    ctx.fillText('शुभ दीपावली • पावन दीपोत्सव', 700, 300);

    ctx.fillStyle = '#fff4d1';
    ctx.font = '20px sans-serif';
    ctx.fillText('Commemorating the holy night when 1.4 million diyas illuminated Ayodhya Dham.', 700, 370);

    const judgeName = judgeNameInput ? judgeNameInput.value.trim() : '';
    const judgeDept = judgeDeptInput ? judgeDeptInput.value.trim() : '';
    if (judgeName) {
      ctx.fillStyle = 'rgba(212, 175, 55, 0.2)';
      ctx.strokeStyle = '#ffd700';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(350, 430, 700, 80, 20);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 26px serif';
      ctx.fillText(`Dedicated in Honor of: ${judgeName}`, 700, 470);
      if (judgeDept) {
        ctx.fillStyle = '#ffd700';
        ctx.font = '18px sans-serif';
        ctx.fillText(`(${judgeDept})`, 700, 496);
      }
    }

    ctx.fillStyle = '#ff9800';
    ctx.font = '34px serif';
    ctx.fillText('🪔  DHARMA  •  SATYA  •  महादीप  •  PREMA  •  SHAANTI  🪔', 700, 680);

    ctx.fillStyle = '#ffd54f';
    ctx.font = '16px monospace';
    ctx.fillText('AYODHYA DHAM // SARAYU RIVER FRONT // DESIGN CHALLENGE 2026', 700, 850);

    triggerDownload(off.toDataURL('image/png'));
  }

  function triggerDownload(dataUrl) {
    const link = document.createElement('a');
    link.download = `Ayodhya_Deepotsav_Living_Poster_2026.png`;
    link.href = dataUrl;
    link.click();
    exportPngBtn.innerText = '📥 Download PNG';
    if (personalizeModal) personalizeModal.classList.remove('active');
  }

  const unlockAudio = () => {
    getAudioContext();
    window.removeEventListener('pointerdown', unlockAudio);
    window.removeEventListener('keydown', unlockAudio);
  };
  window.addEventListener('pointerdown', unlockAudio);
  window.addEventListener('keydown', unlockAudio);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'f' || e.key === 'F') {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen();
      }
    }
  });
});
