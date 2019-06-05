import Component from '../Component.js';
import { auth } from '../services/firebase.js';
import { roomsRef } from '../services/firebase.js';

class AddRoom extends Component {

    render(){
        const form = this.renderDOM();
        const input = form.querySelector('input');

        // FIXME:is this right?
        form.addEventListener('submit', event => {
            event.preventDefault();
            const roomRef = roomsRef.push();

            roomRef.set({
                key: roomRef.key,
                name: input.value,
                owner: auth.currentUser.uid
            }).then(() => {
                form.reset();
            });
        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form>
                <input required>
                <button>Add chat</button>
            </form>
        `;
    }
}

export default AddRoom;