// mockup start
const list = [
    'Alex',
    'Oleg',
    'Olena'
];
// mockup end

const $ul = document.querySelector('ul#list');

const removeItem = ($element) => {
    $ul.removeChild($element);
};

const addItem = (item) => {
    const $li = document.createElement('li');
    $li.innerText = item;
    $li.addEventListener('click', (event) => {
        removeItem(event.target);
        console.log($ul.children.length)
        if($ul.children.length < 10){
           $button.removeAttribute('disabled');
        }
    });
    $ul.appendChild($li);
};

list.forEach((el) => {
    addItem(el);
});

// FORM PATH
const $form = document.querySelector('form#user');
const $input = $form.querySelector('input[name="user_name"]');
const $button = document.querySelector('button');

$form.addEventListener('submit', (event) => {
    event.preventDefault();
    //
    const value = $input.value;
    // check validation
    if (value.length >= 2) {
        addItem(value);
        $input.value = '';
        if($ul.children.length >= 10){
           $button.setAttribute('disabled', 'true');
        }
    } else {
        const $error = document.createElement('small');
        $error.innerText = "Потрібно мінімум два символи";
        $input.addEventListener('click', () => {
            $form.removeChild($error);
        });
        $form.appendChild($error);
        alert('Error');
    }
});









