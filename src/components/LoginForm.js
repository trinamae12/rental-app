export default function LoginForm () {
    return (
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
            </div>
            <div class="mt-10 sm:mx-auto sm:sm-full sm:max-w-sm">
                <form action="#" method="post" class="space-y-6">
                    <div>
                        <label for="email" class="block text-sm/6 font-medium text-gray-900">Email Address</label>
                        <div class="mt-2">
                            <input id="email" type="email" name="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}