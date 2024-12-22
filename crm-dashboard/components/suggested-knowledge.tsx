import { Plus, Share, Calendar } from 'lucide-react'

export function SuggestedKnowledge() {
  return (
    <div className="mt-8 bg-white rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-medium">Suggested Knowledge</h2>
        <div className="flex space-x-2">
          <Plus className="w-5 h-5" />
          <Share className="w-5 h-5" />
          <Calendar className="w-5 h-5" />
        </div>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="pb-2">Subject</th>
            <th className="pb-2">Status</th>
            <th className="pb-2">Start Date</th>
            <th className="pb-2">End Date</th>
            <th className="pb-2">Assigned User</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">Design Sprint</td>
            <td><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Executed</span></td>
            <td>2023-09-30 01:12</td>
            <td>2023-10-01 01:11</td>
            <td>Sam Frank</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

