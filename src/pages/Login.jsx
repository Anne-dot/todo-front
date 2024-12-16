export const Login = () => {
    return (
        <form>
            <h3>Logi sisse</h3>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Parool</label>
                <input type="password" name="password" id="password" />
            </div>
            <button type="submit">Logi sisse</button>
        </form>
    )
};