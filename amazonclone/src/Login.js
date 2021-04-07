import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    //some fancy firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));

    //some firebase stuff
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAawAAAB2CAMAAACjxFdjAAAAmVBMVEX///8AAAD/mQD8/Pz/lwDo6Oj5+fn/lADU1NSjo6Py8vKJiYklJSVfX1/Kysqurq6RkZE/Pz8qKirf399OTk7//PRzc3PAwMC3t7d6enqbm5tJSUn/5cYbGxswMDD/+O1XV1f/nSD/yIj/8t//6tALCwv/xH7/1KL/4Lr/tV3/qD//q0j/268UFBT/z5j/pDX/vW//pSb/iQCs6ifOAAANh0lEQVR4nO2c52LiOhCFKQaDwdTQEkJPqAH2vv/DXXfNkSVjEgWsXZ9fiXGR9GlGo5HsQrWcSxNVC+VCLk1UzmHpoxyWRsphaaQclkbKYWmkHJZGymFppByWRsphaaQclkbKYWmkHJZGymFppByWRsphaaQclkbKYWmkHJZG+h1YVqU2Grfb41bfqt5TGMsSn+8ct25fXrX63lNH/TRn36Ny1S3ZfS3lVsZS27jqYZVrHbtZDPXx0hgJ278aKbxu1FjMms2u3enjma2G7Ryf2Z1aUlEr9WE3empxNmyLeVUSJbzGak/sbvO917UbkpuyyoQlLLe8yszsRkth+6qGZb3OijE14nWsRz9+tbwDbQa4aBNcbXK/7lj22PFL/Kl2LX7eIn4a6DV+Z7xkISrChJXQL/m4x67otW80WXophtWQNEKHO6/yzn5rOv9bXGOHFay84fEXYdceNYtCLSrcif0brIpN7v6jeNdrtvjH18ivE+f/sp2m0N+QUli1D2krdLHdKqR5HVhWjz+/LrthP/ZUy46dFGmEp96ENYN2LQ+FJw05v87BKr/xFzT5TvNNqYTVTmqGHrQywopXr1h0+2//PX68yHfTfgw0FXqt+2BZAo/uiet5FFajUBAQ7t4TZsmlEFYiK67ACEvkPN+rhWpXcLy4wKcKgRLBwHUXLCkr5zToeQhrLLpgoqSF1cFq3WoIWmAKq2cJT28UXsX3AddWTrSrImcr98CyhF0lUJfeFWGJh4K49/6GlMFKrFuswBRWtyM+3foSH1/QEk/E5xDVydn3wEq+s03uCrAk/qWhoo2VwZK0uKTAFNZMAkXqhciIcbP10f3eAUvozYhIHwBYkj77oaKNVcGycOjo1lu1Vpuf/LDTK5JgO5VI0ICD+VdjVKuNeJOgBn3r1lF/srCAzUmHx8C6DIUlrZcKP6gKFlp/OBXhxjFWvx/BYhaKjR/OaLlJG/WDr++oHjfCRIaFMY/fPfqAaxjdtFZMIel8/g6pgkWD73fm+JEWCw1isGbxruurOxzyx1kz1elhdvfqTHx6XNwIE92iAo4itIpyV3RUAGtYr/P2Hc+N3C9FsCCgo+EaTFhZ4oWD9dH2SjGKjV4Lr0X6OO1lgzv1gnQIb4tPj4kbwxhWCERZOwOWhvCo+0Cvs3L2ndRl0koRLGpBXfoDNBurNQdrJLiNq0lQuCok6KJwEGZCdKIKfedFXkO02SYLRcA0yfUL0XEOll0WlK64SN2WcqmyLNL4kAeEirBfEBabgaEJsdkMUIxg0XQQdJECNVF5+oCbyLGkH5Sazg/B745FZ5NxDzoqlu97UjVmVUb1hv0ya34VmxD3gKMhkQHAYlkGDJiZ26zS89lEq9pqN4aLbu+LnuuKduquLI/KNTLxozAPoV4dqjMU3of0SNplZrdaMIUUZ92tfg3zZmlgkTkIhneslcvU/yz4IluVGrccQv2bDBaGIcU3clf6ywf4V/rLe2CyCIv0VRp19SQtdo9+e1k/DSwSAUD6fUb8Fw0lYrDiSgOLy0iSRoYhrwkXLQSXAKwvcjJ16jrAAlORwCL+B5JWNIybSI5LlALWCFlRNwoj5BtcNRFcA7CGkpMzDcvqt8bOMAauRgKLTEGqNN6V1TsBVrXfGrU7Q1hyEQcYXIoC7pkQ+YM5BvUBWHQKToe+jMKq9seNF2HCTwKL1A/GJhqG3YbVb73as3dBzlsMC+POd7A+IIKrGxAOBgUBWDRTkXVY1mgoXwaSwCIeCGDRaW4yrHKt0ZWkgyWwZKkLTwASdySMBXeuye6UbVhWR04qFSxwg2lhVUXbZWJNCuqjBXJrgzBXxjwRjHTBjg2ARXdoZBpWW9q7+dZXCasl2BRAJYKFl7xzbQALmggLcyz6wkrauMK3vhTWm/B0DN0R1s2FNAEsLnXB71mDPoewcE6lLaxKogfkWl8drJs9RACLy9/GVnHBRybBqsSPaQHLiq1QNe3Gax36/S/Aim8lepl06m3qyGKwylzqIlaX1JalKyxujLeDncZpMhg/gAWRdLE4ew2SCjAp5mHhUtNHfA0X+h1Gg3+FG8RRoBuNAr8LC/1ZsCrmKglWQupCcDXnJP+GAMMCN0+Sd78LC5wgTfcnwOLGVtGiIIyDGNYDLE1DdzCsmWw/kWpYaFi0mRJg4Sgn3NkMfhJjT5gUvwkmxRrAAi9PMy6/CkueFoL1LICVmLoIBCPhi/ynwCo1gwVIqGFJdi2ogYVb5GGyRPe74L7txNRFIBjVcNXwZiI3+7DkaWqot2JYfQixaT3K9AeAhakLyVo7rOt8QY4XnGjgQjSDJepvvmCexfqxEljQSNDuaOmktbl0R3exsIeN+oiP3mEjGjVZKF+4kq0ZLBiRYWIC0y9mc3fnBkWwcLCnT4WRhcQQ0u3TH4s6BSZaYvTLTb1oN2g6nWHRNsbWYUveSmCB84WhBWfozDQSM2Jd9sYwOG/q1qF/hLkNnWHJVuNps6mHVSQjE7f9MLrPrZcNmq8BLty5T9wozMBCW9QZFnkvl9+rGs1A1btB0kpVbs2kFxbo9vtB4TuNcKZkR+6b8Gj2YeFGoWiZPv6qcGhaSmChATGDjjEJblROXKP0FcRAonwtf4NoiqYZLG6mGSARLJqEYbQSWFy4EBhAVWA/foHEr72iwr3W4O+CeBLfwmetrxks3t01+oVyX/iZhaDnKoHFv2xpt6qFSl30MtGHV8l7YHE1eq1VanVcB2e5D81gFW63AlZGCawUY1Aor4/cA+vmvUkCWDdYso+VxOUPaGpgpXqLzZOX4LsLVsK7+q56JETUDVbC+5/YQv67S4pgleVf98F9i19elH0XrBs9gaY1dIMlN62hRdt5ojLASGjQrwqNeYIvKlFYXXvSaY9Ho3G7M6HbhsnLXEmzMnjpVDtYsrDYoUM+kRDNWBTBkn0qY1ah8VxgzRGs2XDch+ys1W+HW1Ppm3fyr7DgC8LawZJ8B8OjE82HWB1VwRLHAR6daNCJ0scerI9hS/yhupHNwyqMxB8gaXJb1/SDJdo22AtqVY/VQ91WNIFtBZPyYAWF7E5yGq+T8M2rSoPfy1QRDYo2DzsVrGbh51K5I3eECYsmg+DSeqdpbRjraUelUGi6mzLBLSzc2+Hk44YeLfBYYqNismKfKBzxDuMl/hVDeJ2LdgY66sU3vN0vtXvdW43AMt7tV6hU62WI7WTVI8H3+8rt6DiuuI+j47HtSJW67RvRx1sDLrLsl59/K6TWYPHH26vwfhVWGfy9xX5Q8V005a/8eJ+GVfPFtntU/c2nWjW3C41rj68W6l/9+vRgvZmetufz9rTbrAfPLk1K/YuwBuvz9bA0zFCly/40f3ah0ujfg7VeHRxAhlGKZDjclrtnlyuFHgxrcNo88nFxTfcOqFJcxkEDX/hgWNf/zOv6kQ9EzfdCUi6s5ROLlVYPhrUyS6a5elYnnjrjk+v1DCMYsJgzNEo5rJg+neYyjfNTcA1KHqDSn+P++rlydN0vPXw5LInOTmsZ5nL7DFy71WnKxenrTyNwgxrEg4+PBk/usGGYl21GWufTzAMMuaZLb+QwL+dM4Nr4sPbPLkcKPWOeNT/47WMuVxkYKNZeYczPZ5cjhZ4yKR5c/QjaMI3rs+Zdg9Dt+ZZl5pNiqU7hfMc0j6cnPH9zLZVWYVG8fpMBG7+pZ6Wb1hcznOGYxudjzWtw+uNOsUy/l6y8EfSoQXzxxNzgZ5RMcGaol+3Devb0GiScAlh79x9z9ajH/0RPTOT6UWFkXg/JfG8+/4S5QfPiPW++9GA9OWWZTs/MuodxRshruT/9pn0NNm6+3Qiftvf7xtTzgodffK46PXeJZHdBXA6v7e8sBc6nnweDPcwsbYMfvDmxuU28OCt68nrWYGUwX+jzMo6rqVqHOFifrku6MmKYx9CEBwf3sJGJ6flNPX3xcR1btXCAlfbnqSIDm+9ck4JnmAYzpI2hy4y4kAFYji8sxRaZDN/Cdj8cwtYnN57g7m6YV2JHvhfUw7CyAKtQ2MZx+RbmmNhqt/mGjQ02J8+g4t3APELg58aCesTthYzAKgzOQly+iZnGn318bUN2p/X0tNr/MbhtFhGqC6aV3FjQKOkwIXaVDVjO0LKS4PKIeW2//HO8rra76WazXs+j1F5hMJjP1+vNdLddXY+XpY9JTN688Kmtq6lJWtBTVmA5uM5LKS7CzLOY5eVyOQRy/lwuo5/kd3CzkLwJzZ3zdYkuClmC5TTd6SDeeiTAxunmFaaxF8SXW7NkapEV9JUlWI5Lm+6NVLjuk2EuP4WBpTO2XXRItwfKFixH6/MynXmlJ2UeJGnHzX9ascoerIKbFzdEodw3Sf05S3ns/jtqMsPylUVYjjvcXUs/ti/DI5WYTtdnuPKUTViudt5qxjeBGV7O6nGLZI9RdmE5Wm/dBOy9xDxQx5Wq5GKGlGlYBTcjsb0eSimJ+ZPny341nf99pArZh+VqsJ6er8eLEUx7Y9TCvevG8rBf7dZaxQx3SQdYvubrzWl13R8uy5LBXoRz8S2Xl+P+czvV5xXGb0ofWKEGDrXNlMnNFD67TA+SfrD+YeWwNFIOSyPlsDRSDksj5bA0Ug5LI+WwNFIOSyOV/wfmxODYeJWE3gAAAABJRU5ErkJggg=="
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By Signing-in you agree to the Amazon's Clone Conditions of Use &
          Sale.Please see our privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice
        </p>
        <button onClick={register} className="login__registrationButton">
          Create an Account
        </button>
      </div>
    </div>
  );
}

export default Login;
