import bootstrap from '/public/svg/skills/bootstrap.svg';
import canva from '/public/svg/skills/canva.svg';
import css from '/public/svg/skills/css.svg';
import figma from '/public/svg/skills/figma.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import javascript from '/public/svg/skills/javascript.svg';
import microsoftoffice from '/public/svg/skills/microsoftoffice.svg';
import photoshop from '/public/svg/skills/photoshop.svg';
import picsart from '/public/svg/skills/picsart.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import typescript from '/public/svg/skills/typescript.svg';
import wordpress from '/public/svg/skills/wordpress.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'typescript':
      return typescript;
    case 'bootstrap':
      return bootstrap;
    case 'tailwind':
      return tailwind;
    case 'git':
      return git;
    case 'wordpress':
      return wordpress;
    case 'figma':
      return figma;
    case 'microsoftoffice':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'canva':
      return canva;
    default:
      break;
  }
}
