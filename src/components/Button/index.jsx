import { Container, LoaderSpinAnimation } from "./styles"

export function Button({
    title,
    isLoading,
    icon: Icon,
    size = "100%",
    ...rest
}) {
    return (
        <Container disabled={isLoading} size={size} {...rest}>
            {isLoading ? (
                <LoaderSpinAnimation />
            ) : (
                <>
                    {Icon && <Icon />}
                    {title}
                </>
            )}
        </Container>
    )
}
