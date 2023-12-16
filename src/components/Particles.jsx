import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function ParticlesBG() {
    async function loadParticles(main) {
        await loadFull(main);
    }
    return (
        <div className='particles_style'>

            <Particles id='ts-particles' init={loadParticles} options={{
                background: {
                    color: "transparent",
                },
                particles: {
                    number: {
                        value: 150,
                    },
                    links: {
                        distance: 100,
                        enable: false,
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
                    },
                    size: {
                        value: 4,
                    },
                    shape: {
                        type: "circle",
                    },
                    color: {
                        value: "#7198a0",
                    },
                    opacity: {
                        value: 0.9,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 0.5,
                            opacity_min: 0.1,
                            sync: false,
                        },
                    },

                },
                interactivity: {
                    detect_on: "window",
                    events: {
                        onhover: {
                            enable: false,
                            mode: "repulse",
                        },
                        onclick: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 200,
                            line_linked: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3,
                        },
                        repulse: {
                            distance: 100,
                        },
                        push: {
                            particles_nb: 4,
                        },
                        remove: {
                            particles_nb: 2,
                        },
                    },
                },
            }} />
        </div>
    )
}

