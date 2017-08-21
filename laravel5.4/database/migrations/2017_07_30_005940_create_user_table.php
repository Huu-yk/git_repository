<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user', function (Blueprint $table) {    //建立数据表user
            $table->increments('id');               //主键自增
            $table->string('name')->unique();       //'name'列唯一
            $table->string('password');             //'password'
            $table->string('email')->unique();      //'email'唯一
            $table->timestamps();                   //自动生成时间戳记录创建更新时间
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
