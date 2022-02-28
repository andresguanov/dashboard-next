import { XCircleIcon } from '@heroicons/react/solid'

const Alert = ({ alert, handleClose }): JSX.Element => {
  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose()
    }, 9000)
  }

  return (
    <div>
      {alert?.active && (
        <div x-data className="w-full p-5 mb-8 bg-indigo-100 rounded">
          <div className="flex space-x-3">
            <div className="flex-1 text-sm font-medium leading-tight text-black">{alert.message}</div>
            <button type="button">
              <XCircleIcon className="w-6 h-6 text-gray-600" onClick={handleClose} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Alert
