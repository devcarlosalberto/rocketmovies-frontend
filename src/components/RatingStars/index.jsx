import { Container } from "./styles"
import { FaStar, FaRegStar } from "react-icons/fa"

export function RatingStars({ rating, size }) {
    const maxRating = 5
    const remainingStars = maxRating - rating

    return (
        <Container>
            {[...Array(rating)].map((_, index) => (
                <FaStar key={index} size={size} />
            ))}
            {[...Array(remainingStars)].map((_, index) => (
                <FaRegStar key={index} size={size} />
            ))}
        </Container>
    )
}
