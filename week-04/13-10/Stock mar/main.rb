require "sinatra"
require "sinatra/reloader"
require "stock_quote"

StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')

get '/' do
    erb :form
end
get "/price" do
    stock_code = params[:stock_code]
    @info = StockQuote::Stock.quote stock_code
    @latest_price = @info.latest_price
    @company_name = @info.company_name
    erb :price
end