import { useState } from 'react'
import { Link } from 'react-router-dom'
import SwiggyLogo from '../../assets/SwiggyLogo.webp'

const InputField = ({ label, type, value, onChange, placeholder, icon }) => (
    <div className="flex flex-col gap-y-1">
        <label className="text-xs font-semibold text-sortByBtnHoverColor uppercase tracking-wider">{label}</label>
        <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-locationError">{icon}</span>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full pl-9 pr-4 py-3 border border-[#d4d5d9] rounded-md text-sm text-sortByBtnHoverColor placeholder-locationError focus:outline-none focus:border-headerHoverColor focus:ring-1 focus:ring-headerHoverColor transition-all duration-200"
            />
        </div>
    </div>
)

const SignIn = () => {
    const [tab, setTab] = useState('login')
    const [form, setForm] = useState({ email: '', password: '', name: '', phone: '' })
    const [showPass, setShowPass] = useState(false)
    const [agreed, setAgreed] = useState(false)

    const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="min-h-screen flex">
            {/* left panel */}
            <div className="hidden lg:flex flex-col justify-between w-[42%] bg-ttlRestroHeading px-14 py-12">
                <Link to="/">
                    <img src={SwiggyLogo} alt="Swiggy" className="h-9 brightness-0 invert" />
                </Link>

                <div>
                    <p className="text-4xl font-extrabold text-white leading-tight">
                        Hungry?<br />
                        <span className="text-headerHoverColor">We've got you</span><br />
                        covered.
                    </p>
                    <p className="text-locationError mt-4 text-sm leading-relaxed">
                        Sign in to track orders, save favourites, and unlock exclusive deals delivered right to your door.
                    </p>

                    {/* feature pills */}
                    <div className="flex flex-col gap-y-3 mt-10">
                        {[
                            { icon: '🚀', text: 'Lightning-fast delivery' },
                            { icon: '🏷️', text: 'Exclusive member discounts' },
                            { icon: '❤️', text: 'Save your favourite restaurants' },
                            { icon: '📦', text: 'Real-time order tracking' },
                        ].map(f => (
                            <div key={f.text} className="flex items-center gap-x-3">
                                <span className="text-lg">{f.icon}</span>
                                <span className="text-sm text-locationError">{f.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="text-[11px] text-[#4a4c5a]">
                    &copy; {new Date().getFullYear()} Swiggy Clone. All rights reserved.
                </p>
            </div>

            {/* right panel */}
            <div className="flex-1 flex items-center justify-center bg-lightShimmer px-6 py-12">
                <div className="w-full max-w-[420px]">
                    {/* mobile logo */}
                    <Link to="/" className="flex lg:hidden justify-center mb-8">
                        <img src={SwiggyLogo} alt="Swiggy" className="h-8" />
                    </Link>

                    {/* tab switcher */}
                    <div className="flex bg-white rounded-xl shadow-sm border border-[#e9e9eb] mb-7 p-1">
                        {['login', 'signup'].map(t => (
                            <button
                                key={t}
                                onClick={() => setTab(t)}
                                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${tab === t
                                    ? 'bg-headerHoverColor text-white shadow-sm'
                                    : 'text-sortByBtnColor hover:text-sortByBtnHoverColor'
                                    }`}
                            >
                                {t === 'login' ? 'Sign In' : 'Create Account'}
                            </button>
                        ))}
                    </div>

                    {/* card */}
                    <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(40,44,63,0.08)] border border-[#e9e9eb] px-8 py-8">
                        <h2 className="text-2xl font-extrabold text-ttlRestroHeading mb-1">
                            {tab === 'login' ? 'Welcome back' : 'Join Swiggy'}
                        </h2>
                        <p className="text-sm text-locationError mb-6">
                            {tab === 'login'
                                ? 'Sign in to continue to your account'
                                : 'Create your account in seconds'}
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                            {tab === 'signup' && (
                                <InputField
                                    label="Full Name"
                                    type="text"
                                    value={form.name}
                                    onChange={set('name')}
                                    placeholder="Harshneet Singh"
                                    icon={
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-locationError">
                                            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                                        </svg>
                                    }
                                />
                            )}

                            <InputField
                                label="Email Address"
                                type="email"
                                value={form.email}
                                onChange={set('email')}
                                placeholder="you@example.com"
                                icon={
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-locationError">
                                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                }
                            />

                            {tab === 'signup' && (
                                <InputField
                                    label="Phone Number"
                                    type="tel"
                                    value={form.phone}
                                    onChange={set('phone')}
                                    placeholder="+91 98765 43210"
                                    icon={
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-locationError">
                                            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                                        </svg>
                                    }
                                />
                            )}

                            {/* password */}
                            <div className="flex flex-col gap-y-1">
                                <label className="text-xs font-semibold text-sortByBtnHoverColor uppercase tracking-wider">Password</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-locationError">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-locationError">
                                            <path d="M18 8h-1V6c0-2.8-2.2-5-5-5S7 3.2 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1v2z" />
                                        </svg>
                                    </span>
                                    <input
                                        type={showPass ? 'text' : 'password'}
                                        value={form.password}
                                        onChange={set('password')}
                                        placeholder="••••••••"
                                        className="w-full pl-9 pr-10 py-3 border border-[#d4d5d9] rounded-md text-sm text-sortByBtnHoverColor placeholder-locationError focus:outline-none focus:border-headerHoverColor focus:ring-1 focus:ring-headerHoverColor transition-all duration-200"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPass(p => !p)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-locationError hover:text-sortByBtnHoverColor transition-colors"
                                    >
                                        {showPass
                                            ? <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.8 11.8 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" /></svg>
                                            : <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>
                                        }
                                    </button>
                                </div>
                            </div>

                            {tab === 'login' && (
                                <div className="flex justify-end -mt-1">
                                    <button type="button" className="text-xs text-headerHoverColor font-semibold hover:underline">
                                        Forgot password?
                                    </button>
                                </div>
                            )}

                            {tab === 'signup' && (
                                <label className="flex items-start gap-x-2 cursor-pointer mt-1">
                                    <input
                                        type="checkbox"
                                        checked={agreed}
                                        onChange={e => setAgreed(e.target.checked)}
                                        className="mt-0.5 accent-headerHoverColor w-4 h-4 flex-shrink-0"
                                    />
                                    <span className="text-xs text-locationError leading-relaxed">
                                        I agree to the{' '}
                                        <span className="text-headerHoverColor font-semibold">Terms of Service</span>
                                        {' '}and{' '}
                                        <span className="text-headerHoverColor font-semibold">Privacy Policy</span>
                                    </span>
                                </label>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-headerHoverColor hover:bg-[#e5711a] text-white font-bold py-3 rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow-md mt-1"
                            >
                                {tab === 'login' ? 'Sign In' : 'Create Account'}
                            </button>
                        </form>

                        {/* divider */}
                        <div className="flex items-center gap-x-3 my-5">
                            <div className="flex-1 h-px bg-[#e9e9eb]" />
                            <span className="text-xs text-locationError font-medium">or continue with</span>
                            <div className="flex-1 h-px bg-[#e9e9eb]" />
                        </div>

                        {/* social buttons */}
                        <div className="flex gap-x-3">
                            {[
                                {
                                    label: 'Google',
                                    icon: (
                                        <svg viewBox="0 0 24 24" className="w-5 h-5">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                        </svg>
                                    ),
                                },
                                {
                                    label: 'Facebook',
                                    icon: (
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#1877F2]">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    ),
                                },
                            ].map(s => (
                                <button
                                    key={s.label}
                                    type="button"
                                    className="flex-1 flex items-center justify-center gap-x-2 border border-[#d4d5d9] rounded-lg py-2.5 text-sm font-semibold text-sortByBtnHoverColor hover:border-sortByBtnHoverColor hover:bg-lightShimmer transition-all duration-200"
                                >
                                    {s.icon}
                                    {s.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* switch tab hint */}
                    <p className="text-center text-sm text-locationError mt-5">
                        {tab === 'login' ? "Don't have an account? " : 'Already have an account? '}
                        <button
                            onClick={() => setTab(tab === 'login' ? 'signup' : 'login')}
                            className="text-headerHoverColor font-bold hover:underline"
                        >
                            {tab === 'login' ? 'Sign up' : 'Sign in'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignIn
