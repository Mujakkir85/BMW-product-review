import { Row } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews';
import ShowReviews from '../ShowReviews/ShowReviews';
import './Reviews.css'

const Reviews = () => {

    const [reviews, setReviews] = useReviews()

    return (
        <div >

            <Row className='all-carts'>
                {
                    reviews.map(review => <ShowReviews
                        key={review.id}
                        review={review}>
                    </ShowReviews>)
                }
            </Row>
        </div>
    );
};

export default Reviews;