$(document).ready(function)(){
    var articleContainer = $(".article-container");

    $(document).on("click", ".btn.delete", handleArticleDelete);
    $(document).on("click", ".btn.notes", handleArticleNotes);
    $(document).on("click", ".btn.save", handleNoteSave);
    $(document).on("click", ".btn.note-delete", handleNoteDelete);

    initPage();

    function initPage(){
        articleContainer = empty();
        $.get("/api/headlines?saved=true").then(function(data){
            if (data && data.length){
                renderArticles(data);
            } else {
                renderEmpty();
            }
        });
    }

    function renderArticles(articles){
        var articlePanels = [];

        for (var i = 0; i < articles.length; i++){
            articlePanels.push(createPanel(articles[i]));
        }
    }

    function createPanel(article){
        var panel =
            $(["<div class='panel panel-default'>",
            "<div class='panel-heading'>",
            "<h3>",
            article.headline,
            "<a class='btn btn-danger delete'>",
            "Delete from saved",
            "</a>",
            "<a class='btn btn-info notes'>Article Notes</a>",
            "</h3>",
            "</div>",
            "<div class='panel-body'>",
            article.summary,
            "</div>",
            "</div>"
            ].join(""));

            panel.data("_id", article._id);
            return panel;
    }

    function renderEmpty(){

        var emptyAlert = 
        $(["<div class='alert alert-warning text-center'>",
        "<h4>We don't have any saved articles.</h4>",
        "</div>",
        "<div class='panel panel-default'>",
        "<div class='panel-heading text-center'>",
        "<h3>Browse articles</h3>",
        "</div>",
        "<div class='panel-body text-center'>",
        "<h4><a href='/'>Browse</a></h4>",
        "</div>",
        "</div>"
        ].join(""));

        articleContainer.append(emptyAlert);
    }

    function renderNotesList(data){

        var NotesToRender = [];
        var currentNote;
        if (!data.notes.length){

            currentNote = [
                
            ]
        }
    }

}