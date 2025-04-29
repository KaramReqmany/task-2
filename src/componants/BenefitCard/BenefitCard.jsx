
import './BenefitCard.css'



export default function BenefitCard(data) {


  return (
    <div className='benefitcard' >
      <div className='iconcontainer'>
        <div className='icon'>
          <img src={data.image} alt="" />
        </div>
      </div>
      <div className='heading'>{data.title}</div>
      <p>{data.description}</p>

    </div>
  )
}
