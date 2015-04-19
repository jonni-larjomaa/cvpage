$(function(){
    
    var skills = [
        { skill : 'Linux' },
        { skill : 'Apache' },
        { skill : 'Mysql' },
        { skill : 'PHP' },
        { skill : 'Python' },
        { skill : 'JavaScript' },
        { skill : 'Agile Methodolies' },
        { skill : 'DevOps' },
        { skill : 'Docker' },
        { skill : 'Vagrant' },
        
    ]
    
    $('.skill-items').loadTemplate('templates/skills.html', skills);
})


