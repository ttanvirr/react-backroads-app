import { pageLinks } from '../data'

const PageLinks = ({ parent, item }) => {
  return (
    <ul className={parent} id={parent}>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={item}>
              {link.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default PageLinks
