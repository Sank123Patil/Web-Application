* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    font-family: "Poppins", sans-serif;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 30px;

    color: white;

    background:
        radial-gradient(circle at top left, #6c2cff 0%, transparent 35%),
        radial-gradient(circle at bottom right, #00c6ff 0%, transparent 35%),
        linear-gradient(135deg, #09001a, #12002f, #001c35);

    overflow: hidden;
}


/* Background circles */

.background-circle {
    position: fixed;

    border-radius: 50%;

    filter: blur(5px);

    opacity: 0.5;

    animation: float 6s ease-in-out infinite;
}

.circle-one {
    width: 250px;
    height: 250px;

    background: #8a2be2;

    top: -80px;
    left: -80px;
}

.circle-two {
    width: 300px;
    height: 300px;

    background: #00d4ff;

    bottom: -120px;
    right: -100px;

    animation-delay: 2s;
}


/* Main Card */

.profile-card {
    position: relative;

    width: 100%;
    max-width: 550px;

    padding: 45px 40px;

    text-align: center;

    background: rgba(255, 255, 255, 0.10);

    border: 1px solid rgba(255, 255, 255, 0.20);

    border-radius: 30px;

    backdrop-filter: blur(20px);

    -webkit-backdrop-filter: blur(20px);

    box-shadow:
        0 25px 60px rgba(0, 0, 0, 0.4),
        inset 0 1px 1px rgba(255, 255, 255, 0.15);

    animation: cardAppear 1s ease;
}


/* Profile Image */

.profile-image {
    width: 120px;
    height: 120px;

    margin: 0 auto 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    background:
        linear-gradient(135deg, #8a2be2, #00c6ff);

    border: 4px solid rgba(255, 255, 255, 0.8);

    box-shadow:
        0 0 30px rgba(0, 198, 255, 0.5);

    animation: profileGlow 3s infinite alternate;
}

.profile-image span {
    font-size: 36px;
    font-weight: 700;
    color: white;
}


/* Text */

.welcome {
    font-size: 12px;

    letter-spacing: 4px;

    color: #7ee8ff;

    margin-bottom: 8px;
}

h1 {
    font-size: 42px;

    font-weight: 700;

    margin-bottom: 5px;

    background:
        linear-gradient(90deg, #ffffff, #76e4ff);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.subtitle {
    color: #cbd5ff;

    font-size: 16px;
}


/* Divider */

.line {
    width: 70px;
    height: 4px;

    margin: 25px auto;

    border-radius: 10px;

    background:
        linear-gradient(90deg, #8a2be2, #00c6ff);
}


/* Information */

.info-container {
    display: flex;

    flex-direction: column;

    gap: 14px;

    margin-top: 20px;
}

.info-box {
    display: flex;

    align-items: center;

    gap: 18px;

    text-align: left;

    padding: 16px 20px;

    border-radius: 18px;

    background: rgba(255, 255, 255, 0.08);

    border: 1px solid rgba(255, 255, 255, 0.1);

    transition: all 0.3s ease;
}

.info-box:hover {
    transform: translateY(-4px) scale(1.02);

    background: rgba(255, 255, 255, 0.15);

    border-color: rgba(0, 198, 255, 0.5);

    box-shadow:
        0 10px 25px rgba(0, 198, 255, 0.15);
}

.icon {
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 14px;

    font-size: 23px;

    background:
        linear-gradient(
            135deg,
            rgba(138, 43, 226, 0.5),
            rgba(0, 198, 255, 0.4)
        );
}

.info-box span {
    display: block;

    font-size: 12px;

    color: #9faecb;

    margin-bottom: 3px;
}

.info-box h3 {
    font-size: 16px;

    color: white;

    font-weight: 500;
}


/* Button */

button {
    margin-top: 28px;

    padding: 14px 30px;

    border: none;

    border-radius: 50px;

    font-family: inherit;

    font-size: 15px;

    font-weight: 600;

    color: white;

    cursor: pointer;

    background:
        linear-gradient(
            135deg,
            #8a2be2,
            #00a8ff
        );

    box-shadow:
        0 8px 25px rgba(0, 168, 255, 0.3);

    transition: all 0.3s ease;
}

button:hover {
    transform: translateY(-3px);

    box-shadow:
        0 12px 35px rgba(0, 198, 255, 0.5);
}

button:active {
    transform: scale(0.96);
}


/* Message */

#message {
    margin-top: 15px;

    color: #7ee8ff;

    font-size: 14px;

    min-height: 20px;
}


/* Footer */

footer {
    margin-top: 25px;

    font-size: 12px;

    color: #8792ad;
}


/* Animations */

@keyframes cardAppear {

    from {
        opacity: 0;
        transform: translateY(40px) scale(0.95);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-25px);
    }
}

@keyframes profileGlow {

    from {
        box-shadow:
            0 0 20px rgba(138, 43, 226, 0.4);
    }

    to {
        box-shadow:
            0 0 40px rgba(0, 198, 255, 0.7);
    }
}


/* Mobile Responsive */

@media (max-width: 600px) {

    body {
        padding: 20px;
        overflow: auto;
    }

    .profile-card {
        padding: 35px 22px;
    }

    h1 {
        font-size: 32px;
    }

    .profile-image {
        width: 100px;
        height: 100px;
    }

    .profile-image span {
        font-size: 30px;
    }

    .info-box {
        padding: 14px;
    }
}
