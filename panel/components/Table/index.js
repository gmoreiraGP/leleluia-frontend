const Table = ({ children }) => {
    return (
        <table className="min-w-full">
            {children}


            {/* <tbody className="bg-white">
                <tr>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                    alt="" />
                            </div>

                            <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-gray-900">John Doe
                </div>
                                <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                            </div>
                        </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                        <div className="text-sm leading-5 text-gray-500">Web dev</div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                    </td>

                    <td
                        className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                        Owner</td>

                    <td
                        className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                    alt="" />
                            </div>

                            <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-gray-900">John Doe
                </div>
                                <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                            </div>
                        </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                        <div className="text-sm leading-5 text-gray-500">Web dev</div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                    </td>

                    <td
                        className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                        Owner</td>

                    <td
                        className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                    alt="" />
                            </div>

                            <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-gray-900">John Doe
                </div>
                                <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                            </div>
                        </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                        <div className="text-sm leading-5 text-gray-500">Web dev</div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                    </td>

                    <td
                        className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                        Owner</td>

                    <td
                        className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                    alt="" />
                            </div>

                            <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-gray-900">John Doe
                </div>
                                <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                            </div>
                        </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                        <div className="text-sm leading-5 text-gray-500">Web dev</div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                    </td>

                    <td
                        className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                        Owner</td>

                    <td
                        className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                    alt="" />
                            </div>

                            <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-gray-900">John Doe
                </div>
                                <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                            </div>
                        </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                        <div className="text-sm leading-5 text-gray-500">Web dev</div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                    </td>

                    <td
                        className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                        Owner</td>

                    <td
                        className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                    alt="" />
                            </div>

                            <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-gray-900">John Doe
                </div>
                                <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                            </div>
                        </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                        <div className="text-sm leading-5 text-gray-500">Web dev</div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                    </td>

                    <td
                        className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                        Owner</td>

                    <td
                        className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                    alt="" />
                            </div>

                            <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-gray-900">John Doe
                </div>
                                <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                            </div>
                        </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                        <div className="text-sm leading-5 text-gray-500">Web dev</div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                    </td>

                    <td
                        className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                        Owner</td>

                    <td
                        className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                    alt="" />
                            </div>

                            <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-gray-900">John Doe
                </div>
                                <div className="text-sm leading-5 text-gray-500">john@example.com</div>
                            </div>
                        </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                        <div className="text-sm leading-5 text-gray-500">Web dev</div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                    </td>

                    <td
                        className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                        Owner</td>

                    <td
                        className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                </tr>
            </tbody>
         */}
        </table>
    )
}

const TableHead = ({ children }) => {
    return (

        <th
            className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            {children}
        </th>
    )
}

const TableData = ({ children }) => {
    return (
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            {children}
        </td>
    )
}

Table.Head = TableHead
Table.Data = TableData

export default Table;