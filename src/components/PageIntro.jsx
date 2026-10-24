export default function PageIntro({ title, description, image, imageAlt = '', caption }) {
  return <section className={'platform-page-intro' + (image ? ' has-media' : '')}>
    <div className="platform-page-intro-copy">
      <p className="platform-eyebrow">Belarus–Taiwan & East Asia Platform</p>
      <h1>{title}</h1>
      {description && <p className="platform-page-description">{description}</p>}
    </div>
    {image && <figure className="platform-page-media"><img src={image} alt={imageAlt} />{caption && <figcaption>{caption}</figcaption>}</figure>}
  </section>;
}
