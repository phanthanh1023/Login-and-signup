
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { auth, db } from '../firebase-app/firebase-config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';


const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [errors, setErrors] = useState({});
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newErrors = Validation(name, email, password, passwordConfirm);
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, {
                displayName: name,
            });
            const docRef = await addDoc(collection(db, 'users'), {
                name: name,
                email: email,
                password: password,
                createdAt: serverTimestamp(),
            });
            console.log('Document written with ID: ', docRef.id);
            toast.success('Bạn đã tạo tài khoản thành công');
            navigate("/login");
        } catch (err) {
            toast.error("Lỗi khi tạo tài khoản");
            console.error("Error during account creation:", err);
        }
    };
    useEffect(() => {
        document.title = "Register Page"
    }, [])

    const Validation = (name, email, password, passwordConfirm) => {
        const newErrors = {};
        if (!name) {
            toast.warning('Vui lòng nhập tên của bạn');
            newErrors.name = "Vui lòng nhập tên của bạn";
        }
        if (!email) {
            toast.warning('Vui lòng nhập email');
            newErrors.email = "Vui lòng nhập email";
        } else if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) {
            toast.warning('Email không hợp lệ!');
            newErrors.email = "Email không hợp lệ";
        }

        if (!password) {
            newErrors.password = "Vui lòng nhập password";
            toast.warning('Vui lòng nhập password');
        } else if (password.length < 6) {
            newErrors.password = "Mật khẩu ít nhất có 6 ký tự";
            toast.warning('Mật khẩu ít nhất có 6 ký tự');
        }
        if (!passwordConfirm) {
            newErrors.passwordConfirm = "Vui lòng nhập lại password";
            toast.warning("Vui lòng nhập lại password");
        } else if (passwordConfirm !== password) {
            newErrors.passwordConfirm = "Mật khẩu không khớp";
            toast.warning("Mật khẩu không khớp");
        }
        return newErrors;
    };

    return (
        <section className='bg-gray-50 shadow-xl min-h-screen p-10'>
            <div className='bg-gray-100 rounded-2xl shadow-lg max-w-[600px] p-10 mx-auto'>
                <div>
                    <div className=' flex text-center justify-center mb-5'>
                        <img srcSet="/logo.png 3x" alt="Monkey" />
                    </div>
                    <h1 className='text-xl text-green-600 font-semibold text-center mb-5 '>Monkey-Blogging</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-3 '>
                            <input value={name} type="text" name='name'
                                className='p-3 w-full  h-auto mx-auto border border-gray-400 bg-transparent rounded-xl'
                                placeholder='Nhập tên của bạn'
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <div className='ml-2 pt-2 text-sm text-rose-500'>{errors.name}</div>}
                            <input value={email} type="email" name='email'
                                className='p-3 w-full  h-auto mx-auto border border-gray-400 bg-transparent rounded-xl'
                                placeholder='Email của bạn'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <div className='ml-2 pt-2 text-sm text-rose-500'>{errors.email}</div>}

                            <div className='relative flex flex-col gap-5'>
                                <input value={password} type={isShowPassword === true ? "text" : "password"} name='password'
                                    className='p-3 w-full h-auto mx-auto border border-gray-400 bg-transparent rounded-xl'
                                    placeholder='Mật khẩu'
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
                            <div className='relative'>
                                <input value={passwordConfirm} type={isShowConfirmPassword === true ? "text" : "password"} name='confirmPassword'
                                    className='p-3 w-full h-auto mx-auto border border-gray-400 bg-transparent rounded-xl'
                                    placeholder='Nhập lại mật khẩu'
                                    onChange={(e) => setPasswordConfirm(e.target.value)}
                                />
                                {errors.passwordConfirm && <div className='ml-2 pt-2 text-sm text-rose-500'>{errors.passwordConfirm}</div>}

                                <div className='cursor-pointer'>
                                    {!isShowConfirmPassword ? (<PiEyeSlash className="absolute top-[16px] right-[10px] cursor-pointer"
                                        onClick={() => setIsShowConfirmPassword(true)} />
                                    ) : (
                                        <PiEye className="absolute top-[16px] right-[10px]"
                                            onClick={() => setIsShowConfirmPassword(false)} />)}
                                </div>

                            </div>
                            <button className='w-full bg-green-600 p-3 text-white rounded-xl mt-2 font-medium text-lg'>Đăng Ký Tài khoản</button>
                            <div className='grid grid-cols-3 text-center items-center justify-center p-5'>
                                <hr className='border-gray-300' />
                                <p className='font-medium text-sm'>OR</p>
                                <hr className='border-gray-300' />
                            </div>
                            <div className='flex'>
                                <a href="#!" className="mr-5 rounded-lg border border-solid border-gray-400 p-2">
                                    <FcGoogle className="h-8 w-8" />
                                </a>
                                <a href="#!" className="mr-5 rounded-lg border border-solid border-gray-400 p-2">
                                    <FaFacebookF className='w-8 h-8 text-blue-700' />
                                </a>
                            </div>
                        </div>
                        <Link to="/login" className='flex p-3 font-medium text-xl mt-2'>Đăng nhập</Link>
                    </form>
                </div>
                <div>

                </div>
            </div>
        </section>
    );
};

export default Signup;





