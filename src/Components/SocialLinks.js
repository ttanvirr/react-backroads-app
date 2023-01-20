import { socialLinks } from '../data'

const SocialLinks = ({ parent, item }) => {
  return (
    <ul className={parent}>
      {socialLinks.map((link) => {
        const { id, href, icon } = link
        return (
          <li key={id}>
            <a href={href} target="_blank" rel="noreferrer" className={item}>
              <i className={icon}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default SocialLinks
