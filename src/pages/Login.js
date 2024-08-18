import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { toast } from 'react-toastify'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-app/firebase-config';





const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [errors, setErrors] = useState('')
    const [useInfo, setUseInfo] = useState("");
    useEffect(() => {
        // onAuthStateChanged(auth, (currentUser) => {
        //     if (currentUser) {
        //         setUseInfo(currentUser);
        //     } else {
        //         setUseInfo("");
        //     }
        // });
        document.title = "Login page"
        if (useInfo?.email) navigate("/login");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = Validation(email, password);
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }
        try {
            const cred = await signInWithEmailAndPassword(
                auth,
                email,
                password,
            );
            setUseInfo(cred);
            toast.success("Đăng nhập thành công");
            navigate("/")
        } catch (err) {
            toast.error("Tài Khoản Không Tồn Tại");
            console.log(err);
        }
    }

    const Validation = (email, password) => {
        const newErors = {};
        if (!email) {
            toast.warning('Vui lòng nhập email');
            newErors.email = "Vui lòng nhập email";
        } else if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) {
            toast.warning('Email không hợp lệ!');
            newErors.email = "Email không hợp lệ";
        }

        if (!password) {
            newErors.password = "Vui lòng nhập password";
            toast.warning('Vui lòng nhập password');
        } else if (password.length < 6) {
            newErors.password = "Mật khẩu ít nhất có 6 ký tự";
            toast.warning('Mật khẩu ít nhất có 6 ký tự');
        }
        return newErors;
    }
    return (

        <section className='flex bg-gray-50 shadow-xl items-center justify-center p-10' >
            <div className='bg-gray-100 flex  rounded-2xl shadow-lg max-w-[1000px] p-10 items-center gap-10'>
                <div className='w-1/2  '>
                    <h1 className='text-4xl text-green-600 font-semibold'>Login</h1>
                    <p className='text-lg mt-5 mb-10'>If You Are Already A Menber,Easy Log In</p>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                        <input type="email" name="email"
                            value={email}
                            className='p-3 w-full max-w-[500px] h-auto mx-auto border border-gray-400 rounded-lg'
                            placeholder='Enter your email...'
                            onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <div className='ml-2 pt-1 text-sm text-rose-500'>{errors.email}</div>}
                        <div className='relative'>
                            <input type={isShowPassword === true ? "text" : "password"} name='password'
                                value={password}
                                className=' p-3 w-full max-w-[500px] h-auto mx-auto border border-gray-400 rounded-lg'
                                placeholder='Enter your password...'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <div className='ml-2 pt-2 text-sm text-rose-500'>{errors.password}</div>}
                            <div className='cursor-pointer'>
                                {!isShowPassword ? (<PiEyeSlash className="absolute top-[16px] right-[10px]"
                                    onClick={() => setIsShowPassword(true)} />
                                ) : (
                                    <PiEye className="absolute top-[16px] right-[10px]"
                                        onClick={() => setIsShowPassword(false)} />)}
                            </div>
                        </div>
                        <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out hover:transition-all text-xl text-white p-3 rounded-xl w-full bg-green-600 font-semibold; '
                        >Login</button>
                    </form>
                    <div className='p-5 grid grid-cols-3 text-gray-500 items-center justify-center'>
                        <hr className='border-gray-400' />
                        <p className='text-center'>OR</p>
                        <hr className='border-gray-400' />
                    </div>
                    <div className='flex flex-col gap-5 '>
                        <a href='#!' className=' flex items-center justify-center gap-2 p-3 border w-full rounded-xl bg-white cursor-pointer font-medium active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out hover:transition-all'>
                            <FcGoogle className='w-8 h-8 ' />
                            Login with Google
                        </a>
                        <a href='#!' className=' flex items-center justify-center gap-2 p-3 border w-full rounded-xl bg-white cursor-pointer font-medium active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out hover:transition-all'>
                            <FaFacebookF className='w-8 h-8 text-blue-700' />
                            Login with Facebook
                        </a>

                    </div>

                    <p className='mt-3 text-sm font-medium'>Forget My Password?</p>
                    <hr className='border-gray-400 mt-3' />
                    <div className='mt-5 flex justify-between items-center text-sm font-medium'>
                        <p>If You Don't Have An Account, Create...</p>
                        <Link to="/signup" className='p-3 bg-white border border-gray-400 rounded-xl cursor-pointer'>Sign Up</Link>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img className='rounded-2xl object-cover min-h-screen' src="login.jpg" alt=""

                    />
                </div>
            </div>
        </section>
    );
};

export default Login;