class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :full_name
      t.string :password_digest
      t.string :email
      t.string :bio
      t.string :image_path

      t.timestamps null: false
    end
  end
end
