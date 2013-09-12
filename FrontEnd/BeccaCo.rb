module Company
  @cust_index = {}

  def self.add_cust(name, brand, purchase)
    current_cust = Customer.new(name, brand, purchase)
    @cust_index[name] = current_cust
  end

  def self.purchase_clothes(name, purchase)
    @cust_index[name].history.push(purchases)
  end
end

class Customer
  attr_accessor :name, :brand, :history
  def intialize(name, brand, purchase)
    @brand = brand
    @name = name
    @history = [purchase]
  end
end

class Shoes
  attr_accessor :brand, :type, :color
  def initalize(brand, type, color)
    @brand = brand
    @type = type
    @color = color
  end
end

Company.add_cust("Becca", ["Vince", "Theory"], {:top => "Red one", :shoe => Shoes.new("Vera", "Heel", "Black", "Cost")})

Company.cust_index["Becca"].brand
Company.cust_index["Becca"]

Companny.cust_index["Becca"].history {|purchase|
puts purchase
}