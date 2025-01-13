'use client'

export default function SubscribeForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = (e.target as HTMLFormElement).email.value;
        console.log(email);
        // TODO: send email to mailchimp
        return;
    };

    return (
        <>
            <form className="flex justify-center items-center mt-12" onSubmit={handleSubmit}>
                <input type="email" name="email" disabled placeholder="Enter your email" className="border border-gray-300 rounded-l-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                <button type="submit" disabled  className="bg-blue-600 text-white rounded-r-md p-3 hover:bg-blue-700 transition duration-200">Subscribe</button>
            </form>
            <div className="flex justify-center items-center mt-12">
                <p className="text-sm text-gray-500">
                    { 'Join 1000+ engineers who are leveling up their skills' }
                </p>
            </div>
        </>
    );
};