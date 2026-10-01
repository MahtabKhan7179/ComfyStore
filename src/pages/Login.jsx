import { FormInput } from "../components";
import { SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

function Login() {
    return <section className="h-screen grid place-items-center">
        <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
            <h4 className="text-center text-3xl font-bold">
                Login
            </h4>
            <FormInput label="email" name="name" type="identifier" defaultValue="test@test.com" />
            <FormInput label="password" name="password" type="password" defaultValue="secret" />
            <div className="mt-4">
                <SubmitBtn text="login" />
                <button className="mt-2 btn btn-secondary btn-block">Guest User</button>
                <p className="text-center">
                    Not a member yet?
                    <Link to='/register' className="ml-2 link link-hover link-primary capitalize">register</Link>
                </p>

            </div>
        </Form>
    </section>
}

export default Login;