class Cookbook
  def initialize(cuisine)
    @recipes = []
    @recipes.push(cuisine)
  end

  def recipes
    @recipes
  end

  def title = (new_title)
    @title = new_title
  end
end


class Recipe 
  def initialize(dish, ingredients, steps)
    
  end
end