// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} list-container`}>
      <div>
        <h1 className="list-heading">{title}</h1>
        <p className="list-para">{description}</p>
        <div className="img-container">
          <img src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
