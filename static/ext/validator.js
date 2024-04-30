function validateSearch(f, lang) {
    var s = f.search.value
    if (s == "") {
        if (lang == "en") alert("Empty search field")
        else if (lang == "es") alert("Campo de búsqueda vacío")
        return false
    }
    else return true
}