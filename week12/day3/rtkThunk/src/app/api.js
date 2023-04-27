export const getUsersAPI = async () => {
    try {
        const response = await fetch("https://reqres.in/api/users?page=2").then(
            (res) => res.json()
        )
        return response
    } catch (e) {
        throw new Error("error while retreiving users")
    }
}

export const getCatPictures = async () => {
    try {
        const response = await fetch(
            "https://fakerapi.it/api/v1/images?_type=kittens&_quantity=10"
        ).then((res) => res.json())
        return response
    } catch (e) {
        throw new Error("error while retreiving cat pictures")
    }
}
