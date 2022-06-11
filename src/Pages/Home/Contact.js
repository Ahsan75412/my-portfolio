import React from 'react';

const Contact = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-accent shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-primary">CONTACT</h2>
                    <form action="https://formsubmit.co/240e7da5ea5e8eeed595b7d0a08629af" method="POST">

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-secondary">Name:</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"

                            />
                            <label className="label">
                                <span className="label-text text-secondary">Email:</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                <span className="label-text text-secondary">Message:</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Message"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>

                        <button type='submit' className='btn btn-warning font-bold mt-6'><i class="fa-solid fa-paper-plane mr-2"></i>Submit</button>

                    </form>


                </div>
            </div>
        </div >
    );
};

export default Contact;