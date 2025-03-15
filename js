<script>
    document.querySelector('.btn').addEventListener('click', function() {
        let name = prompt('What is your first name?');
        if (name.length) {
            alert('Thanks, ' + name + ' , Kindly wait to be called before placing your order c:');
        } else {
            alert('No name, no coffee for you :c');
        }
    });
</script>
