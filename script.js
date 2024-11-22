let tugma = () => {
    let narh = prompt('neshta qiyriq set kerak')
    let pull1 = 45000 * narh

    let a1 = confirm(` sizning jami zakazingiz narxi ${pull1} xalixam zakaz berasizmi?`)

    switch (a1) {
        case true:
            alert('Yaxshi sizning zakazingiz qabul qilindi')
            break
        case false:
            alert('yaxshi zakaz muvafaqiyatli bekor qilindi')
    }
}