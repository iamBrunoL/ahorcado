new Vue({
    el: "#app",
    data: () => ({
        words: [],
        newWord: "",
    }),
    mounted() {
        this.refreshWords();
    },
    methods: {
        refreshWords() {
            this.words = getWords();
        },
        saveWord() {
            // Clean it again ._.
            this.deleteWhiteSpaces();
            const word = this.newWord.toUpperCase();
            // Only save if it does not exist
            if (this.words.indexOf(word) === -1) {
                this.words.push(word);
                saveWords(this.words);
                this.newWord = "";
            } else {
                Swal.fire("Esa palabra ya existe");
            }
        },
        async deleteWord(index) {
            const result = await Swal.fire({
                title: 'Eliminar palabra',
                text: "¿Estás seguro?",
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: 'No, volver',
                confirmButtonText: 'Si, eliminar'
            });
            if (!result.value) return;
            this.words.splice(index, 1);
            saveWords(this.words);
        },
        deleteWhiteSpaces() {
            this.newWord = this.newWord.replace(/ /g, "")
        }
    }
});