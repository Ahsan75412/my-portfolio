import React from 'react';
import html from '../../Assets/skills/1200px-HTML5_logo_and_wordmark.svg.png';
import css from '../../Assets/skills/CSS3_logo_and_wordmark.svg.png';
import bootstrap from '../../Assets/skills/Bootstrap_logo.svg.png';
import tailwind from '../../Assets/skills/images.png';
import js from '../../Assets/skills/Unofficial_JavaScript_logo_2.svg.png';
import react from '../../Assets/skills/React-icon.svg.png';
import node from '../../Assets/skills/1200px-Node.js_logo.svg.png';
import express from '../../Assets/skills/express-logo.png';
import fire from '../../Assets/skills/firebase-180.png';
import netlify from '../../Assets/skills/netlify.png';
import vs from '../../Assets/skills/Visual_Studio_Code_1.35_icon.svg.png';
import git from '../../Assets/skills/GitHub-Logo.png';
import figma from '../../Assets/skills/figma.png';

const Skills = () => {
    return (
       <div>
           <h2 className='text-primary text-3xl text-center font-bold  py-12'>My Skills</h2>
            <div class="card lg:card-side  shadow-xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 ">
        <div class="card-body flex-row bg-accent">
            <img src={html} alt="html" />
        </div>
        <div class="card-body flex-row bg-accent">
            <img src={css} alt="css" />
        </div>
        <div class="card-body flex-row bg-accent">
            <img src={bootstrap} alt="bootstrap" />
        </div>
        <div class="card-body flex-row bg-accent">
            <img src={tailwind} alt="tailwind" />
        </div>
        <div class="card-body flex-row bg-accent">
            <img src={js} alt="js" />
        </div>
        <div class="card-body flex-row bg-accent">
            <img src={react} alt="react " />
        </div>
        <div class="card-body flex-row bg-accent">
            <img src={node} alt="node" />
        </div>
        <div class="card-body  bg-accent">
            <img src={express} alt="express" />
        </div>
        <div class="card-body flex-row bg-accent">
            <img src={fire} alt="fire" />
        </div>
        
        <div class="card-body flex-row bg-accent">
            <img src={netlify} alt="netlify" />
        </div>
        <div class="card-body flex-row bg-accent">
            <img src={vs} alt="vs" />
        </div>
        <div class="card-body flex-row bg-accent">
            <img src={git} alt="git" />
        </div>
        <div class="card-body flex-row bg-accent">
            <img src={figma} alt="figma" />
        </div>
      </div>
       </div>
    );
};

export default Skills;