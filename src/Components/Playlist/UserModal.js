import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6),rgba(0,0,0,0.6))"
      },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background : '#404142'
  },
};

Modal.setAppElement(document.getElementById('root'));

function UserModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <div>
            <form class="bg-white border shadow-xl rounded px-8 pt-6 pb-8 mb-4">
                    <p className="font-bold text-center text-xl font-sans pb-12">To continue, Login to IMusic</p>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input 
                        // ref={(input) => {
                        //     this.getEmail = input;
                        // }}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="email" 
                        name="email"
                        type="text" 
                        required
                        placeholder="Username" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input 
                        // ref={(password) => {
                        //     this.getPassword = password;
                        // }}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                         id="password"
                         name="password"
                          type="password"
                          required
                           placeholder="******************" />
                        {/* <p class="text-black-500 text-xs italic">Please enter a password.</p> */}
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="Submit">
                            Sign In
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
            </form>
        </div>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}
export default UserModal;