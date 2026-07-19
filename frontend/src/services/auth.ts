import api from "./api";

export interface LoginResponse {
    access_token: string;
    token_type: string;
}

export async function login(
    email: string,
    password: string
): Promise<LoginResponse> {

    const form = new URLSearchParams();

    form.append("username", email);

    form.append("password", password);

    const response = await api.post(

        "/users/login",

        form,

        {

            headers: {

                "Content-Type":
                    "application/x-www-form-urlencoded",

            },

        }

    );

    return response.data;

}