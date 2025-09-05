var main = {
    // init() 함수: 이벤트 리스너를 등록합니다.
    init : function () {
        var _this = this;
        // '저장' 버튼 클릭 시 save() 함수 실행
        $('#btn-save').on('click', function () {
            _this.save();
        });

        // '수정' 버튼 클릭 시 update() 함수 실행
        $('#btn-update').on('click', function () {
            _this.update();
        });

        // '삭제' 버튼 클릭 시 delete() 함수 실행
        $('#btn-delete').on('click', function () {
            _this.delete();
        });
    },

    // 게시글 저장
    save : function () {
        var data = {
            title: $('#title').val(),
            author: $('#author').val(),
            content: $('#content').val()
        };

        $.ajax({
            type: 'POST',
            url: '/api/v1/posts',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function() {
            alert('글이 등록되었습니다.');
            window.location.href = '/'; // 저장 후 홈으로 리디렉션
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },

    // 게시글 수정
    update : function () {
        var data = {
            title: $('#title').val(),
            content: $('#content').val()
        };

        var id = $('#id').val();

        $.ajax({
            type: 'PUT',
            url: '/api/v1/posts/'+id,
            dataType: 'json',
            contentType:'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function() {
            alert('글이 수정되었습니다.');
            window.location.href = '/'; // 수정 후 홈으로 리디렉션
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },

    // 게시글 삭제
    delete : function () {
        var id = $('#id').val();

        $.ajax({
            type: 'DELETE',
            url: '/api/v1/posts/'+id,
            dataType: 'json',
            contentType:'application/json; charset=utf-8'
        }).done(function() {
            alert('글이 삭제되었습니다.');
            window.location.href = '/'; // 삭제 후 홈으로 리디렉션
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    }
};

// 페이지 로드 시 init() 함수 실행
main.init();