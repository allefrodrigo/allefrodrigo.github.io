import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import pdf from '../../assets/resume.pdf'
import pdfBr from '../../assets/resume-pt-br.pdf'

const About = () => {
  const { name, role, description, social } = about

  return (
    
    <div className='about center'>
      {name && (
        <div>
        <h1>
          Olá, me chamo <span className='about__name'>{name} </span><span className="wave">👋</span>
        </h1>
   


        </div>
      )}

      {role && <h2 className='about__role'>{role}.</h2>}
      <p className='about__desc'>{description && description}</p>


      <div className='about__contact center'>
        

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
      <div className='about__contact center'>
     
     <a href={pdf}>
       <span type='button' className='btn btn--outline' >
         Download cv eng
       </span>
     </a>
   
     <a href={pdfBr}>
       <span type='button' className='btn btn--outline' >
         Download cv pt-br
       </span>
     </a>

  
 </div>
    </div>
  )
}

export default About
