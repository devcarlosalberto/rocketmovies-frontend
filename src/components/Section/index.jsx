import { FaStar, FaRegStar } from "react-icons/fa"

import { Container, Note, SectionText, Tags } from "./styles"
import { RatingStars } from "../../components/RatingStars"
import { Tag } from "../../components/Tag"

export function Section({ id, title, note, text, tags }) {
    return (
        <Container to={`/details/${id}`}>
            <h2>{title}</h2>

            <Note>
                <RatingStars rating={note} size="1.2rem" />
            </Note>

            <SectionText>{text}</SectionText>

            <Tags>
                {tags.map((tag) => (
                    <Tag key={tag.id} name={tag.name} />
                ))}
            </Tags>
        </Container>
    )
}
