import { Link } from 'react-router-dom';

export default function RelatedMaterial({to,label,title,image}) {
  return <Link to={to} className="material-related-link">
    {image&&<img src={image} alt="" loading="lazy"/>}
    <span><span className="material-related-label">{label}</span><strong>{title}</strong></span><span aria-hidden="true">↗</span>
  </Link>;
}
