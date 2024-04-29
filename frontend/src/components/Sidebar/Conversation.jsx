const Conversation = () =>{
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">

        <div classname='avatar online'>
          <div className="w-12 rounded-full">
            <img src='https://cdn1.iconfinder.com/data/icons/ui-essential-17/32/UI_Essential_Outline_1_essential-app-ui-avatar-profile-user-account-512.png' alt='user avatar'/>

          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>John Doe</p>
            <span className='text-xl'>🎃</span>
          </div>
        </div>

      </div>

      <dir className='divider my-0 py-0 h-1' />
    </>
  )
};
export default Conversation;