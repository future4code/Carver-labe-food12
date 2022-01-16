export const goToHome = (history) => {
    history.push ("/home")
}

export const goToLogin = (history) => {
    history.push ("/login")
}

export const goToSignUp = (history) => {
    history.push ("/register")
}

export const goToAddress = (history) => {
    history.push ("/address")
}

export const goToUserProfile = (history) => {
    history.push ("/profile")
}

export const goBack = (history) => {
    history.goBack()
}

export const goToRestaurant = (history, id) => {
    history.push(`/details/${id}`)
}

export const goToCart = (history) => {
    history.push('/cart')
}