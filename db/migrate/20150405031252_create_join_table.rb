class CreateJoinTable < ActiveRecord::Migration
  def change
    create_table :post_tags do |t|
      t.references :post
      t.references :tag
    end
  end
end
