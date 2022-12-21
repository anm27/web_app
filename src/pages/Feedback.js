export default function Feedback() {
  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6 mt-10 mx-10 my-10">
          <div className="md:col-span-1 flex-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Feedbacks
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0 border border-gray-200 shadow rounded-md">
            <form action="#" method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      {/* <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label> */}
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="name"
                          id="id"
                          className="block w-full rounded-none rounded-r-md border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-100 pl-2 pr-6 py-2"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Feedback
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 z-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-100 pl-2 pr-6 py-2"
                        placeholder="Write your feedback here..."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div> */}
    </>
  );
}
