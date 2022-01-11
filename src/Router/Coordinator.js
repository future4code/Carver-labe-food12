export const goToHome = (history) => {
    history.push ("/")
}

export const goToLogin = (history) => {
    history.push ("/login")
}

export const goToSignUp = (history) => {
    history.push ("/register")
}


export const goToDetails = (history, id) => {
    history.push (`/details/${id}`)
}

export const goToUserProfile = (history) => {
    history.push ("/profile")
}

