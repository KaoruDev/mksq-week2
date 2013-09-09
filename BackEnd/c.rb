  class Cookbook

  def initialize(cuisine)
    @recipes = []
  end
  # def title # attr_reader
  #   @title
  # end

  # def title=(new_title) #attr_writer
  #   @title = new_title
  # end

  #attr_accessor = both

  attr_accessor :title

  def add_recipe(recipe)
    @recipes.push(recipe)
  end
end


class Recipe 
  def initialize(dish, ingredients, steps)
    
  end
end